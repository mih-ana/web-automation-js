import Jimp from 'jimp'

class Page {
    constructor(browserName) {
        this.browserName = browserName
    }

    get browser() {
        if (this.browserName) {
            return browser[this.browserName]
        }
        return browser
    }

    getVideoFrame(videoId) {
        const image = this.browser.execute(function(videoId) {
            const video = document.getElementById(videoId)
            if (!video) {
                throw new Error(`Video with ID ${videoId} not found on the page`)
            }
            const canvas = document.createElement('canvas')
            const ctx = canvas.getContext('2d')
            canvas.width = video.videoWidth
            canvas.height = video.videoHeight

            ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
            return canvas.toDataURL('image/png')
        }, videoId)

        const imageBuffer = Buffer.from(image.replace('data:image/png;base64,', ''), 'base64')

        return this.browser.call(() => Jimp.read(imageBuffer))
    }
}

export default Page