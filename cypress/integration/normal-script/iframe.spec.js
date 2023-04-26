/// <reference types='cypress' />

import "cypress-iframe";

// context('Actions', ()=> {

//     beforeEach(()=>{
//         cy.visit('http://eaapp.somee.com/')
//     })

//     it('Perform iFrame data entry', ()=>{
//         cy.get("#txtName").type('Cypress')

//         cy.get("#frame").then($iframe=>{

//             const $body = $iframe.contents().find('body');
//             // store into alias
//             cy.wrap($body).as('iframe')

//         })
//         cy.get('@iframe').find('#txtNameWithiniFrame').type('text within iframe')
//     })
// });

context("fframes", () => {
  before(() => {
    cy.visit("https://jqueryui.com/draggable/");
  });

  it("iframes practice", () => {
    cy.frameLoaded(".demo-frame");

    cy.iframe()
      .find("#draggable")
      .then((res) => {
        const frmValue = res.text();
        expect(frmValue).to.contain("Drag me around");
      });
  });
});
