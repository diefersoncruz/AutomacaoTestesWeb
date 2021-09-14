
Feature: Cadastro de usuarios no site Aprendendo a testar 

    Scenario: Cadastrar usuario com login e senha validos
        Given acesso a pagina de cadastro de usuarios
        When preencho o usuario joaoClaudio e nome Joao Claudio e senha jc13
        And clico no botao Enviar
        Then devo visualizar o usuario joaoClaudio na lista de usuarios cadastrados