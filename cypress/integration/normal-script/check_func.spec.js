describe('Fill all details', () =>{

    it('Complete registration', () => {

        // cy.viewport(1920,1080)

        cy.visit("http://seleniumpractise.blogspot.com/2016/09/complete-registration-form.html")
        cy.get("select[name='dropdown']").select("Maths").find(":selected").contains("Maths")
        cy.get("select[name='dropdown']").select("Physics").find(":selected").contains("Physics")
        cy.get("select[name='dropdown']").select(0).find(":selected").contains("Maths")
        // cy.get("input[type='checkbox']").check({force:true})
        cy.get("input[type='checkbox']").first().check().should("be.checked")
        

    });
})