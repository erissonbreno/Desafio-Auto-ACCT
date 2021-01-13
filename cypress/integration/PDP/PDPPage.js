/// <reference types="Cypress"/>

import PDPElements from './PDPElements'
const pdpelements = new PDPElements

class PDPPage {
    acessarPDP() {
        cy.visit('https://shop.samsung.com/br/geladeira-french-door-convert-564-l/p?skuId=1294')        
    }

    inserirCEP() {
        cy.get(pdpelements.campoCEP()).type('40720710')
    }

    calcularEntrega() {
        cy.get(pdpelements.botaoCalcular()).click()
    }

    verificarEntregas() {
        cy.get(pdpelements.campoEntregas()).should('exist')
    }

    adicionarAoCarrinho() {
        cy.get(pdpelements.botaoAdicionarCarrinho()).click()
    }

    verificarTituloCarrinho() {
        cy.get(pdpelements.tituloMeuCarrinho()).should('exist')
    }

    verificarProduto() {
        cy.get(pdpelements.produto()).should('have.id', 'product-name1294')
    }
}

export default PDPPage