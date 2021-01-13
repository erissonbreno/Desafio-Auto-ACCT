/* global Given, Then, When */

import CommonPage from './CommonPage'
const commonPage = new CommonPage

When(/^que estou com os popups fechados$/, () => {
	commonPage.removerPopups()
});