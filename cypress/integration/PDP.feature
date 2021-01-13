Feature: Pagina do produto

    Scenario: Acessar pagina do produto e realizar o cálculo de frete
    Given que eu estou na pagina de produto
    And que estou com os popups fechados
    When insiro meu CEP
    And calculo o mesmo
    Then devo ver prazo de entrega

    Scenario: Adicionar um produto no carrinho via Página do produto
    Given que eu estou na pagina de produto
    And que estou com os popups fechados
    When adiciono ao carrinho
    Then vejo o título Meu carrinho
    And vejo que o produto está adicionado ao carrinho