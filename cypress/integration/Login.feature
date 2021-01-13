Feature: Login
 
Scenario: Realizar login com email e senha
    Given que eu estou na tela de login
    And que estou com os popups fechados
    When eu insiro credenciais validas
    And entro
    Then devo ver a página "Dados pessoais"
