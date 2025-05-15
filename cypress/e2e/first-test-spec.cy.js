it('first test', () => {
    cy.visit('/todo')
    cy.get('h1').should('be.visible')
    cy.get('[data-test="new-todo"]').should('be.visible')

    cy.get('[data-test="new-todo"]').type('Pay electric bill{enter}')
    cy.get('label').contains('Walk the dog').should('be.visible')
    cy.contains('Pay electric bill').parent().find('input').check()
    cy.contains('Pay electric bill').parents('li').should('have.class', 'completed')
    cy.contains('Clear completed').should('be.visible')

    //cy.get(':nth-child(1) > .view > .toggle').click() <- better to use cy.contains because not only checking for position
    cy.contains('Active').click()
    cy.contains('Active').should('have.class','selected').and('be.visible')
    cy.get('.todo-count').contains('2').should('be.visible')


})

it.only('second test', () => {
    cy.visit('http://automationexercise.com')
    //cy.get('h1').should('be.visible')
    cy.get('#slider-carousel > .carousel-inner').should('be.visible')
    cy.contains('Signup / Login').should('be.visible').click()
    cy.get('.signup-form > h2').contains('New User Signup!').should('be.visible')
    cy.get('[data-qa="signup-name"]').type('email@email.com')
    cy.get('[data-qa="signup-email"]').type('password@password')
    cy.get('[data-qa="signup-button"]').click()
    cy.get('#id_gender1').click()
    cy.get('[data-qa="name"]').clear().type('Elen')
    cy.get('[data-qa="name"]').clear().type('test@test.com')
    cy.get('[data-qa="password"]').type('password@password')
    cy.get('[data-qa="days"]').select('1')
    cy.get('[data-qa="months"]').select('January')
    cy.get('[data-qa="years"]').select('2000')
    cy.get('#newsletter').click()


    
    

})