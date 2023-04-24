/// <reference types="cypress" />

class EALoginPage {

    open(){
        cy.visit('/')
    }

    performLogin(user, pass){
        cy.get('#user-name').type(user)
        cy.get('#password').type(pass,{log:false})

    }

    clickLoginButton(){
        cy.get('#login-button').click()
    }
}

export default new EALoginPage()