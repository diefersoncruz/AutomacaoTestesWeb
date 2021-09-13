/// <reference types="Cypress" />

const url = Cypress.config("baseUrl")
const inputUsuario = "input[name='form_usuario']"
const inputSenha = "input[name='form_senha']"
const btnEnviarCadastro = "input[value='enviar']"

class CadastroUsuariosPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url+"/treinar-automacao.php")
    }

    preencherUsuarioSenha(usuario, senha){
        cy.get(inputUsuario).type(usuario)
        cy.get(inputSenha).type(senha)
    }

    clicarEnviarCadastroUsuario(){
    }
 }

export default CadastroUsuariosPage;