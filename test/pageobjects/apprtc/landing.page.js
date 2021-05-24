import Page from '../base.page'

class LandingPage extends Page {
    get roomNameInput() { return this.browser.$('#room-id-input') }
    get joinButton() { return this.browser.$('#join-button') }

    open() {
        this.browser.url('https://appr.tc/')
    }
}

export default LandingPage