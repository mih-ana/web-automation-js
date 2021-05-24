const baseConfig = require('./wdio.base.conf')
const merge = require('deepmerge')

exports.config = merge(baseConfig.config, {
    specs: [
        './test/tests/**/*.single.js'
    ],
    maxInstances: 4,
    capabilities: [
        {
            browserName: 'chrome',
            // 'goog:ChromeOptions' : {
            //     args: [
            //         '--headless'
            //     ]
            // } - headless mode
        },
        {
            browserName: 'firefox'
        }
    ] //add custom capabilities with browserstack capabilities here
})

//npm run single