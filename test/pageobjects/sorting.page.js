import Page from './base.page'
import { numberToString } from '../utils/numberParser'

class SortingPage extends Page {
    get gridButton () { return $('#demo-tab-grid') }
    get gridItems() { return $$('#demo-tabpane-grid .list-group-item')}

    open() {
        browser.url('https://demoqa.com/sortable')
    }

    sortGrid() {
        let gridItems = this.gridItems
        let j = 0
        for (let i = gridItems.length; i > 0; i--) {
            let button
            browser.waitUntil(() => {   
                gridItems = this.gridItems
                button = gridItems.find(item => item.getText() === numberToString(i))
                
                return button
            })

            gridItems[j].scrollIntoView()
            button.dragAndDrop(gridItems[j])
            j++
        }
    }

    validateGridSorted() {
        const gridItems = this.gridItems
        let num = gridItems.length
        for(const item of gridItems) {
            expect(item).toHaveText(numberToString(num))
            num--
        }
    }
}

export default new SortingPage()