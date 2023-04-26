describe("post user request", function () {
  // let accessToken =
  //   "bcc439a384f7e236595e631ff066eb9cc7b625234ef122c06d618fb2f10312bb";
  let randonText = "";
  let testEmail = "";

  it("create user request", function () {
    var pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < 10; i++)
      randonText += pattern.charAt(Math.floor(Math.random() * pattern.length));
    testEmail = randonText + "@gmail.com";
    cy.request({
      method: "POST",
      url: "https://gorest.co.in/public/v1/users",
      headers: {
        Authorization: "Bearer " + accessToken,
      },
      body: {
        name: "Test Automation",
        gender: "male",
        email: testEmail,
        status: "active",
      },
    }).then((res) => {
      cy.log(testEmail);
      cy.log(res);
      cy.log(JSON.stringify(res));
      expect(res.status).to.eq(201);
      expect(res.body.data).has.property("email", testEmail);
      expect(res.body.data).has.property("gender", "male");
    });
  });
});
