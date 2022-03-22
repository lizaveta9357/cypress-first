describe('H O M E', () => {

    before(() => {
        cy.visit('https://kompot.us/');
    })

    it('Logo exists', () => {
        // cy.get('span.me-5.fw-bold.fs-5.text-black').should('contain.text', 'Kompot')
        cy.get('#logo').should('contain.text', 'Kompot')
    })

    it('Log in button exists', () => {
        cy.get('[data-qa="login"]')
            .should('have.attr', 'href', '/user/login')
            .should('be.visible')
    })

    it('Sign up button exists', () => {
        cy.get('[data-qa="register"]')
            .should('have.attr', 'href', '/user/register')
            .should('be.visible')
    })
})

describe('Home Page Links', () => {

    afterEach(()=> {
        cy.visit('https://kompot.us/');
    })

    it('Login button redirects to login page', () => {
        cy.get('[data-qa="login"]').click();
        cy.get('h1').should('contain.text', 'Welcome back!')
    })

    it('Register button redirects to register page', () => {
        cy.get('[data-qa="register"]').first().click();
        cy.get('h1').should('contain.text', 'Start your free 14-day trial with Kompot')
    })
})