/* global Given, Then, When */

import CadastroUsuariosPage from '../pageobjects/CadastroUsuariosPage'
const cadastroUsuariosPage = new CadastroUsuariosPage


Given("acesso a pagina de Cadastro de usuarios", () =>{
    cadastroUsuariosPage.acessarSite();
})

When("preencho o usuario {} e senha {}", (usuario,senha) => {
    cadastroUsuariosPage.preencherUsuarioSenha(usuario, senha);
}) 

When("clico no botao Enviar", ()=>{
    cadastroUsuariosPage.clicarEnviarCadastroUsuario();
})

Then("devo visualizar o usuario {} na lista de usuarios cadastrados", (usuario) =>{

})