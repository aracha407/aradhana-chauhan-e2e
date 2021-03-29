/// <reference types="cypress" />

const title = "The whole working-from-home thing — Apple"
context('Youtube', () => {

 
  it('Search & Click', () => {
    cy.visit('https://youtube.com').as('you-load')
    cy.get('#search').type(title, { delay: 100 })
    cy.get('#search-form').submit().as('you-search')
    cy.get('yt-formatted-string').contains(title).click()
  })
})
