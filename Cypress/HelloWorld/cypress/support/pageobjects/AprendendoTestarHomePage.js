/// <reference types="Cypress" />

const url = Cypress.config("baseUrl")

class AprendendoTestarHomePage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }
 }

export default AprendendoTestarHomePage;