const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('You logged into a secure area!'))
    })
})


describe('Invalid username', () => {
    it('Invalid username', async () => {
        await LoginPage.open()

        await LoginPage.login('toms', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('Your username is invalid!'))
    })
})


describe('Invalid password', () => {
    it('Invalid password', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'Super')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('Your password is invalid!'))
    })
})


describe('Invalid username and password', () => {
    it('Invalid username and password', async () => {
        await LoginPage.open()

        await LoginPage.login('legend', 'Super')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('Your username is invalid!'))
    })
})