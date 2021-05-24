const {step} = require("mocha-steps")
import CallPage from '../pageobjects/apprtc/call.page'
import LandingPage from '../pageobjects/apprtc/landing.page'
import Jimp from 'jimp'

const user1 = {
    landingPage: new LandingPage('user1'),
    callPage: new CallPage('user1')
}

const user2 = {
    landingPage: new LandingPage('user2'),
    callPage: new CallPage('user2')
}

describe('2 user video conference', () => {
    let roomName

    step('user should open the page', () => {
        user1.landingPage.open()
        user2.landingPage.open()
    })

    step('user1 should enter the room', () => {
        roomName = user1.landingPage.roomNameInput.getValue()
        user1.landingPage.joinButton.click()
    })

    step('user2 should enter the same room', () => {
        user2.landingPage.roomNameInput.setValue(roomName)
        user2.landingPage.joinButton.click()
    })

    step('both users should see self-view window', () => {
        user1.callPage.smallVideo.waitForDisplayed( { timeout: 3000 })
        user2.callPage.smallVideo.waitForDisplayed()
    })

    step('both users should see correct video content', () => {
        for (const user of [user1, user2]) {
            const image = user.callPage.getVideoFrame('remote-video')
            const pixel = Jimp.intToRGBA(image.getPixelColor(10, 10))
            expect(pixel.r).toBe(0)
            expect(pixel.b).toBe(0)
            expect(pixel.g).toBeGreaterThan(100)
        }
    })

})
//npm run multi -- --spec test/tests/apprtc.js
//r: 0, g: 176, b: 0, a: 255