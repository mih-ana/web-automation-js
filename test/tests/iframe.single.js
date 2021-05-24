import { step } from 'mocha-steps'
import IFramePage from '../pageobjects/iframe.page'

describe('Page contains correct title', () => {
    step('should open iFrame page', () => {
        IFramePage.open()
        //throw new Error('intentionally fail')
    })
    step('should contain correct title', () => {
        browser.switchToFrame(IFramePage.iframe)
        expect(IFramePage.heading).toHaveText('This is a sample page')

        //browser.switchToParentFrame() - za da se vrati na glavnata page
        //browser.switchToFrame(null) - same func as above
    })
})

//npm test -- --spec test/tests/iframe.js