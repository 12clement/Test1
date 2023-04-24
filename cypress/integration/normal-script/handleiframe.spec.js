/// <reference types='cypress' />

import 'cypress-iframe'

describe('iframe testing', ()=> {

    beforeEach(()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
    })

    it('should switch to iframe', ()=>{
        const iframe = cy.frameLoaded('#mce_0_ifr')
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap)


        iframe.clear().type('you are welcome {ctrl+a}')

        cy.get("[aria-label='Bold']").click()

    })

    it('approach 2 using iframe pluggin', ()=>{
        cy.frameLoaded('#mce_0_ifr') // load the frame
        cy.iframe('#mce_0_ifr').clear().type('you are cypress {ctrl+a}')

        cy.get("[aria-label='Bold']").click()

    })
});