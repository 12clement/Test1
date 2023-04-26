/// <reference types="cypress"/>

describe("Advanced Commands", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/tables", {
      failOnStatusCode: false,
    });
  });

  xit("cy find", () => {
    cy.get("#table1")
      .find("tbody>tr")
      .first()
      .find("td")
      .find("a")
      .first()
      .click();
    cy.url("match", "#edit");
  });

  it("cy each", () => {
    cy.get("tr>th")
      .first()
      .each(function ($ele, $index, $list) {
        cy.log("td element text " + $ele.text());
      })
      .then(function ($lis) {
        expect($lis).to.have.length(1);
      });
  });
});
