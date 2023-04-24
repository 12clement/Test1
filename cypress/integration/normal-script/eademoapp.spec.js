/// <reference types="Cypress" />


context('Actions', ()=> {

    beforeEach(()=>{
        cy.visit('https://demosite.executeautomation.com/',{failOnStatusCode:false})
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
        })

    it('Perform Login', ()=>{
        cy.get("[name='UserName']").type('admin')
        cy.get("[name='Password']").type('password')
        cy.get(':nth-child(3) > input').click();


        

        cy.get("p > input").click();
        
        cy.on('window:confirm', (str)=>{
            expect(str).to.eq('You generated a Javascript alert')
            return true;
        });

    })
});