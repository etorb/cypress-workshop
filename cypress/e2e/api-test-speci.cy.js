it('first api test', () => {
cy.request('GET','https://bstackdemo.com/api/products').then((response) => {
    expect(response.status).to.eq(200)
})

})
it('intercept api request', () => {
    cy.intercept('GET', 'https://bstackdemo.com/failed-request').as('failedRequest')
    cy.intercept('GET', 'https://bstackdemo.com/api/products').as('productsRequest')
    cy.visit('https://bstackdemo.com/')
    cy.wait('@failedRequest').then((interception) => {
        expect(interception.response.statusCode).to.eq(404)
    })
    cy.wait('@productsRequest').then((interception) => {
        expect(interception.response.statusCode).to.eq(200)
        expect(interception.response.body).not.to.be.empty
        expect(interception.response.body).to.have.property('products')
    })

})

it('intercept api request 2', () => {
    cy.intercept('GET', '/comments').as('comments')
    cy.visit('https://qa-practice.netlify.app/fetch-api')
    cy.wait('@comments').then((interception) => {
        expect(interception.response.statusCode).to.eq(200)
        expect(interception.response.body).not.to.be.empty
    })
    
})
it('intercept api request 2', () => {
    cy.intercept('GET', '/pricing').as('pricing')
    cy.visit('https://openweathermap.org/price')
    cy.wait('@pricing').then((interception) => {
        expect(interception.response.statusCode).to.eq(200)
        expect(interception.response.body).not.to.be.empty
        expect(interception.response.body).to.have.property('currency')
        expect(interception.response.body).not.to.be.empty
        expect(interception.response.body.currency).to.eq('EUR')
    })
    
})

it('mock api test 1', () => {
    cy.intercept('GET', '/api/products', {
        body: {
    "products": [
        {
            "availableSizes": [
                "Apple"
            ],
            "currencyFormat": "$",
            "currencyId": "USD",
            "description": "iPhone 12",
            "id": 1,
            "installments": 9,
            "isFav": false,
            "altText": "img",
            "price": 799,
            "sku": "iPhone12-device-info.png",
            "title": "iPhone 12"
        },
        {
            "availableSizes": [
                "Apple"
            ],
            "currencyFormat": "$",
            "currencyId": "USD",
            "description": "iPhone 12 Mini",
            "id": 2,
            "installments": 9,
            "altText": "img",
            "isFav": false,
            "price": 699,
            "sku": "iPhone12-device-info.png",
            "title": "iPhone 12 Mini"
            }
        ]
    }
})
    cy.visit('https://bstackdemo.com/')
    

})
it('mock api test 1', () => {
    cy.intercept('GET', '/api/products', {
        fixture: 'products.json'
    }).as('mockedProducts')
    cy.visit('https://bstackdemo.com/')
    

})

it('intercept api request 4', () => {
    cy.intercept('GET', '/comments', {
        fixture: 'comments.json'}).as('comments')
    cy.visit('https://qa-practice.netlify.app/fetch-api')
    cy.wait('@comments').then((interception) => {
        expect(interception.response.statusCode).to.eq(200)
        expect(interception.response.body).not.to.be.empty
        expect(interception.response.body.length).to.be.eq(2)
    })
    
})

it.only('intercept api request 4', () => {
    cy.intercept('GET', '/pricing', {
        fixture: 'pricing.json'}).as('pricing')
    cy.visit('https://openweathermap.org/price')
    cy.wait('@pricing').then((interception) => {
        expect(interception.response.statusCode).to.eq(200)
        expect(interception.response.body).not.to.be.empty
        expect(interception.response.body).to.have.property('currency')
        expect(interception.response.body).not.to.be.empty
        expect(interception.response.body.currency).to.eq('EUR')
    })
    
})