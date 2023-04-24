/// <reference types="cypress"/>

describe("mouse over feature", () =>
 {
        it.skip("click on signup link test", () =>
        {
          cy.visit('https://www.littlewoods.com/women/e/b/1589.end')
          cy.get('.bsCellTwo').first().click()
          cy.get('.cross').click()
          cy.wait(3000)
          cy.get('car_block').should('be.hidden').invoke('show')
          cy.get('#button_order_cart').click()
          cy.url().should('include','controll=order')
          
        })

        it("click on add-ons", () =>
        {
          cy.visit('https://www.spicejet.com/')
          cy.wait(2000)
          cy.contains('Email').click()
        //  cy.wait(3000)
        //  cy.contains('SpiceMax').click()

          
        })


})       