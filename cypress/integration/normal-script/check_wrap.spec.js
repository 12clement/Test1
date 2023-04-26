describe("Fill all details", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  xit("Complete registration", () => {
    // cy.viewport(1920,1080)

    cy.visit(
      "http://seleniumpractise.blogspot.com/2016/09/complete-registration-form.html"
    );
    cy.get("select[name='dropdown']")
      .select("Maths")
      .find(":selected")
      .contains("Maths");
    cy.get("select[name='dropdown']")
      .select("Physics")
      .find(":selected")
      .contains("Physics");
    cy.get("select[name='dropdown']")
      .select(0)
      .find(":selected")
      .contains("Maths");
    // cy.get("input[type='checkbox']").check({force:true})
    cy.get("input[type='checkbox']").first().check().should("be.checked");
  });

  it("Select value", () => {
    cy.visit(
      "http://seleniumpractise.blogspot.com/2016/08/bootstrap-dropdown-example-for-selenium.html"
    );
    cy.get("#menu1").click();
    cy.get("a[role='menuitem']").each(function ($ele, index, list) {
      cy.log($ele.text());
      if ($ele.text() == "JavaScript") {
        cy.log("Found Element");
        cy.wrap($ele).click();
        cy.title().should("include", "Automation");
      } else {
        cy.log("Current Value", $ele.text());
      }
    });
  });
});
