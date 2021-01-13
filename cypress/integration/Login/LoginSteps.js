/* global Given, Then, When */

import LoginPage from './LoginPage'
const loginPage = new LoginPage

Given(/^que eu estou na tela de login$/, () => {
	loginPage.acessarSite()
});

When(/^eu insiro credenciais validas$/, () => {
	loginPage.inserirCredenciais()
});

When(/^entro$/, () => {
	loginPage.clicarEntrar()
});

Then(/^devo ver a página "([^"]*)"$/, (args1) => {
	loginPage.verificarDadosPessoais()
});
