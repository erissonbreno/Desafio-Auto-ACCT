/// <reference types="cypress" />

import CommonElements from './CommonElements'
const commonElements = new CommonElements

class CommonPage {
    removerPopups() {
            //cy.get(commonElements.popupCookies(), {timeout: 60000}).click()
            cy.get(commonElements.popupNovidades(), {timeout: 60000}).click()
  }
}
export default CommonPage