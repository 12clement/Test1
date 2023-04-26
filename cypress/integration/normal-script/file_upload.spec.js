describe("file upload use cases", function () {
  it("simple file upload", function () {
    cy.visit("http://automationpractice.com/index.php?controller=contact");

    const yourfileContent = "cat1.jpeg"; // file in fixtures path
    cy.get("#input_upload_file").attachFile(yourfileContent);
  });
});
