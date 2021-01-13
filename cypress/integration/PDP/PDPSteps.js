/* global Given, Then, When */

import PDPPage from './PDPPage'
const pdpPage = new PDPPage

Given(/^que eu estou na pagina de produto$/, () => {
	pdpPage.acessarPDP()
});

When(/^insiro meu CEP$/, () => {
	pdpPage.inserirCEP()
});

When(/^calculo o mesmo$/, () => {
	pdpPage.calcularEntrega()
});

Then(/^devo ver prazo de entrega$/, () => {
	pdpPage.verificarEntregas()
});


When(/^adiciono ao carrinho$/, () => {
	pdpPage.adicionarAoCarrinho()
});

Then(/^vejo o título Meu carrinho$/, () => {
	pdpPage.verificarTituloCarrinho()
});

Then(/^vejo que o produto está adicionado ao carrinho$/, () => {
	pdpPage.verificarProduto()
});

