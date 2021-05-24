import Page from '../base.page'

class CallPage extends Page {
    get smallVideo() { return this.browser.$('#mini-video') }
    get remoteVideo() { return this.browser.$('#remote-video') }
}

export default CallPage