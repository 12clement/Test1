describe("get user api tests", function () {
  // let accessToken =
  //   "bcc439a384f7e236595e631ff066eb9cc7b625234ef122c06d618fb2f10312bb";

  it("get users", function () {
    cy.request({
      method: "GET",
      url: "https://gorest.co.in/public-api/users/123/posts",
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.meta.pagination.limit).to.eq(10);
      expect(res.body.meta.pagination).has.property("limit", 10);
      expect(res.body).has.to.deep.equal({
        code: 200,
        meta: {
          pagination: {
            total: 0,
            pages: 0,
            page: 1,
            limit: 10,
          },
        },
        data: [],
      });
    });
  });
});
