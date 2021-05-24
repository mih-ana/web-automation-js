const { step } = require("mocha-steps")
import SortingPage from '../pageobjects/sorting.page'

const networkConditions = ['online', 'Regular 3G']

for (let condition of networkConditions) {
describe(`Grid Sort using ${condition}' network`, () => {
// before(() => {
//     browser.enablePerformanceAudits({
//         networkThrottling: condition,
//         cpuThrottling: 4,
//         formFactor: 'mobile'
//     })
//     browser.emulateDevice('iPhone X')
// })

    step('should open a page', function() {
        this.timeout(120000)
        SortingPage.open()
        expect(SortingPage.gridButton).toBeDisplayed()
    })

    step('should navigate to Grid page', function() {
        SortingPage.gridButton.click()
        expect(SortingPage.gridButton.getAttribute('class')).toContain('active')
       // browser.debug()
    })

    step('should sort the grid', function() {
        SortingPage.sortGrid()
        SortingPage.validateGridSorted()
    })

    // step('Lighthouse performance score should be below 0.8', function() {
    //     const score = browser.getPerformanceScore()
    //     console.log(score)
    //     expect(score).toBeGreaterThan(0.8)
    // })

    // after(() => {
    //     browser.disablePerformanceAudits()
    // })
})
}