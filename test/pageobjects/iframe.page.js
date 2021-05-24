import Page from './base.page'

class IFramePage extends Page {
    get heading() { return $('#sampleHeading') }
    get iframe() { return $('#frame1') }

    open() {
        browser.url('https://www.demoqa.com/frames')
    }
}

export default new IFramePage()