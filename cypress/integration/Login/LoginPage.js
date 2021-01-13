/// <reference types="Cypress" />

import LoginElements from './LoginElements'
const loginElements = new LoginElements

class LoginPage {
    acessarSite() {
        cy.visit("https://shop.samsung.com/br/")
    }
    
    // Insere credenciais
    inserirCredenciais() {
        cy.get(loginElements.campoEmail()).type('erisson.batista@acct.global')
        cy.get(loginElements.campoSenha()).type('Teste123')
    }
    
    // Entra com as credenciais
    clicarEntrar() {
        cy.get(loginElements.botaoEntrar()).click()
    }
      
    // Verifica se está na página "Dados pessoais"
    verificarDadosPessoais() {
        cy.get(loginElements.campoDadosPessoais()).should('contain', 'Dados pessoais')
    }

}

export default LoginPage;