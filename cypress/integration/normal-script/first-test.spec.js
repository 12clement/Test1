/// <reference types="cypress"/>

describe("MyTestSuite", () =>
 {
        it("Login Application", () =>
        {
            // visit website
        cy.visit("http://www.eaapp.somee.com/");


        cy.contains("Login").click();
        cy.get("#loginLink").then(($link) => {
              const linkText =  $link.text();
              expect(linkText).is.eql('Login');
        }).click();

        // cy.url().should("include", "/Account/login");

        cy.get("#UserName").type("admin1");
        cy.get("#Password").type("Password1#");

        cy.get(".btn").click({force:true});

        //click Employee list
        cy.contains("Employee List").click();

        //table
        // cy.get(".table").find("tr > td");
        cy.get(".table").find("tr").contains("Prashanth").parent().contains("Benefits").click();
        
        cy.get(".table").find("tr").as("rows");

        cy.get("@rows").then(($row) =>{
          cy.wrap($row).click({multiple:true});
        })

        
        })
  })