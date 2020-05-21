describe('Login', () => {
  it('Should see log in screen when navigating to url', () => {
    cy.visit('http://localhost:8080/#/login')
    cy.get('#email')
      .type('test@test.ee')
    cy.get('#password')
      .type('test')
    cy.get('[data-cy-login-button]')
      .click()
    cy
      .request('POST', 'http://localhost:3300/login', { email: 'test@test.ee', password: 'test' })
      .then((response) => {
        // response.body is automatically serialized into JSON
        expect(response.body).to.have.property('msg', 'Logged in', ) // true
      })
  })

  it('Should fail if bad user pass', () => {
    cy.visit('http://localhost:8080/#/login')
    cy.get('#email')
      .type('test@test.ee')
    cy.get('#password')
      .type('wrongpass')
    cy.get('[data-cy-login-button]')
      .click()
    cy.request({
      url: 'http://localhost:3300/login',
      method: 'POST',
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400)
    })
  })

  it('Should fail if bad email', () => {
    cy.visit('http://localhost:8080/#/login')
    cy.get('#email')
      .type('test@ee')
    cy.get('#password')
      .type('wrongpass')
    cy.get('[data-cy-login-button]')
      .click()
    cy.request({
      url: 'http://localhost:3300/login',
      method: 'POST',
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400)
    })
  })
})