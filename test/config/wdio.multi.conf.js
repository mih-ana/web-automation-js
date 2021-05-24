const baseConfig = require('./wdio.base.conf')
const merge = require('deepmerge')

const chromeOptions = {
    args: [
        '--use-fake-ui-for-media-stream',
        '--use-fake-device-for-media-stream',
        //'--use-file-for-fake-vide-capture=Users/your path to your custom video'
    ]
}

exports.config = merge(baseConfig.config, {
    specs: [
        './test/tests/**/*.multi.js'
    ],
    maxInstances: 4,
    capabilities: {
        user1: {
            capabilities: {
                browserName: 'chrome',
                'goog:chromeOptions': chromeOptions
            }
        },
        user2: {
            capabilities: {
                browserName: 'chrome',
                'goog:chromeOptions': chromeOptions
            }
        }
    }
})

//npm run multi