const cy = require('cypress')

describe('test Youtube', () => {
    it('Launch Youtube', () => {
      cy.visit('https://youtube.com')
    })
  })