/* global Given, When, Then */

import CadastroUsuariosPage from '../pageobjects/CadastroUsuariosPage'
const cadastroUsuariosPage = new CadastroUsuariosPage


Given("acesso a pagina de cadastro de usuarios", () =>{
    cadastroUsuariosPage.acessarSite()
})

When("preencho o usuario {} e nome {} e senha {}", (usuario,nome, senha) => {
    cadastroUsuariosPage.preencherUsuarioSenha(usuario, nome, senha)
}) 

When("clico no botao Enviar", () => {
    cadastroUsuariosPage.clicarBtnEnviarCadastroUsuario();
})

When("clico no botao apagar ao lado do usuario {string}", (usuario) => {
    cadastroUsuariosPage.apagarUsuarioListaUsuarios(usuario);
})

Then("devo visualizar o usuario {} na lista de usuarios cadastrados", (usuario) =>{
    cadastroUsuariosPage.validarUsuarioCadastradoListaUsuarios(usuario)
})

Then("nao devo visualizar o usuario {string} na lista de usuarios cadastrados", (usuario) =>{
})


 
