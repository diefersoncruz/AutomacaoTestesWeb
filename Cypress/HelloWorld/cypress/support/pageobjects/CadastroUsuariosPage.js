/// <reference types="Cypress" />

const url = Cypress.config("baseUrl")
const inputUsuario = "input[name='form_usuario']"
const inputNome = "input[name='form_nome']"
const inputSenha = "input[name='form_senha']"
const btnEnviarCadastro = "input[value='Enviar']"
const tabelaUsuariosCadastrados = ""

class CadastroUsuariosPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url+"/treinar-automacao.php")
    }

    preencherUsuarioSenha(usuario,nome, senha){
        cy.get(inputUsuario).type(usuario)
        cy.get(inputNome).type(nome)
        cy.get(inputSenha).type(senha)
    }

    clicarBtnEnviarCadastroUsuario(){
        cy.get(btnEnviarCadastro).click()
    } 

    validarUsuarioCadastradoListaUsuarios(usuario){
        cy.get('table').eq(1).contains(usuario)
    }
 }

export default CadastroUsuariosPage;