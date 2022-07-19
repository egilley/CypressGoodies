// AnimalAPI.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe ('My first test',()=>{
    it('clicks the link "type"',() => {
        cy.visit('https://google.com')
        cy.contains('type').click()
    })
})
