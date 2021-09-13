
Feature: Cadastro de usuarios no site Aprendendo a testar 

    Scenario: Cadastrar usuario com login e senha validos
        Given acesso a pagina de Cadastro de usuarios
        When preencho o usuario <usuario> e senha <senha>
        And clico no botao Enviar
        Then devo visualizar o usuario <usuario> na lista de usuarios cadastrados

        Examples:
        |usuario     |senha  | 
        |Joao Claudio| JC1982|