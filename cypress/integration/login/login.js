import {Before, After, Given, Then} from "cypress-cucumber-preprocessor/steps"
import loginPage from "../pages/ealoginpage"
//  import {loginPage} from "cypress/integration/pages/ealoginpage.js"

Before(() => {
  cy.reload()
})

After(() => {
    cy.reload()
  })

Given('A user is on login page', () => {
      loginPage.open()
})

// Given('A user enter username {string}', (user) => {
//     cy.get('#user-name').type(user)
// })

// And('A user enter password {string}', (pass) => {
//     cy.get('#password').type(pass)
// })

Given('I login as follows' ,(table) => {
    table.hashes().forEach(row => {
        // cy.get('#user-name').type(row.user)
        // cy.get('#password').type(row.pass)
      
      
      loginPage.performLogin(row.user,row.pass)
    });
})

Given('A user clicks on login button', () => {
    // cy.get('#login-button').click()
    
  loginPage.clickLoginButton()
})

Then('A user will be logged in', () => {
    cy.url().should('contains', '/inventory.html')
})
