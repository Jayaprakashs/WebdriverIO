const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')

describe('My Login application again ', () => {
    it('should login with valid credentials again', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('You logged into a secure area!'))
    })
})


describe('Invalid username again', () => {
    it('Invalid username again', async () => {
        await LoginPage.open()

        await LoginPage.login('toms', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('Your username is invalid!'))
    })
})


describe('Invalid password again', () => {
    it('Invalid password again', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'Super')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('Your password is invalid!'))
    })
})


describe('Invalid username and password again', () => {
    it('Invalid username and password again', async () => {
        await LoginPage.open()

        await LoginPage.login('legend', 'Super')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('Your username is invalid!'))
    })
})