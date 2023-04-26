describe("Register Users", function () {
  before(function () {
    cy.fixture("user").then(function (data) {
      this.data = data;
    });
  });

  it("Register valid Users", function () {
    cy.visit("https://ineuron-courses.vercel.app/login");
    cy.contains("New user? Signup").click();
    cy.get("input#name").type(this.data.UserName);
    cy.get("input#email").type(this.data.Email);
    cy.get("input#password").type(this.data.Password);
    //cy.get("input[type='checkbox']").click({multiple:true});
    cy.get("input[type='checkbox']").first().click();
    cy.get("input[type='checkbox']").last().click();
    cy.get("input[type='checkbox']").eq(3).click();

    cy.get("input[value='Male']").click();
    cy.get("select[name='state']")
      .select(this.data.statename)
      .should("have.value", "Gujarat");

    cy.contains("Sign up").should("be.enabled").click();

    cy.get("input#email1").type(this.data.Email);
    cy.get("input#password1").type(this.data.Password);
    cy.get(".submit-btn").click();
    cy.contains("Sign out").click();
  });
});
