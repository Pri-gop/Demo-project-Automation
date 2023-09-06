///<reference types="Cypress" />


describe("Login page of Orange-HRM", function() {

    
    it("logo and GUI", function(){
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get(".orangehrm-login-logo").find('img').should('be.visible'); 
        cy.get(".orangehrm-login-branding").find('img').should('be.visible'); 

    }); 
    it("UI elements", function(){
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get("div.orangehrm-login-slot").should('be.visible'); 
        cy.get('.oxd-text--h5').should('be.visible').should("have.text",'Login');
        cy.get('.oxd-sheet > :nth-child(1)').should('be.visible').contains("Username : Admin");
        cy.get('.oxd-sheet > :nth-child(2)').should('be.visible').contains("Password : admin123");
        cy.get(':nth-child(2) > .oxd-input-group > .oxd-input-group__label-wrapper > .oxd-label').should('be.visible').contains("Username");
        cy.get(':nth-child(3) > .oxd-input-group > .oxd-input-group__label-wrapper > .oxd-label').should('be.visible').contains("Password");
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').should('have.attr','placeholder').and('eq', 'Password');
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').should('have.attr','placeholder').and('eq', 'Username');
        cy.get('.oxd-button').should('be.visible').contains(" Login ");



    });
    it("links", function()
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get('.orangehrm-login-footer-sm').should('exist').find('a').should('have.length', 4).each(($ANCHOR, index) => {
        
        cy.wrap($ANCHOR).should(($link) => {
            expect($link).to.have.attr('href');
          })
        .invoke('attr', 'href') // Get the href attribute value
        .then((href) => {
          // Convert href to lowercase
          const lowercaseHref = href.toLowerCase();
          expect(lowercaseHref).to.include('orangehrm'); 
        })
        })
        cy.get(':nth-child(2) > a').should('be.visible').should('have.attr','href').and('eq', 'http://www.orangehrm.com');
        cy.get('.orangehrm-login-forgot > .oxd-text').click()
        cy.window().then((win) => {

            cy.wrap(win.location.href).should('include', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode');
        });
       
    });
    it("login with valid cred", function(){
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.get('.oxd-button').click()
        cy.window().then((win) => {

            cy.wrap(win.location.href).should('include', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard');
        });
    
    });
        it("login with in valid Username", function(){
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("zsdsdsd")
            cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
            cy.get('.oxd-button').click()
            cy.get('.oxd-alert-content').should('be.visible')
            cy.get('.oxd-alert-content > .oxd-text').contains("Invalid credentials")
            
        
    });

    it("login with in valid password", function(){
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("sdsd1234")
        cy.get('.oxd-button').click()
        cy.get('.oxd-alert-content').should('be.visible')
        cy.get('.oxd-alert-content > .oxd-text').contains("Invalid credentials")
    
});

it("login with blankspace Username", function(){
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(" ")
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
    cy.get('.oxd-button').click()
    cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').should('be.visible').should("have.text",'Required');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(" ").should('have.css', 'border-color', 'rgb(235, 9, 16)');
    

});

it("login with blankspace password", function(){
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(" ").should('have.css', 'border-color', 'rgb(235, 9, 16)');
    cy.get(':nth-child(3) > .oxd-input-group > .oxd-text').should('be.visible').should("have.text",'Required');
    
    

});

it("login with blankspace Username & password", function(){
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(" ")
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(" ")
    cy.get('.oxd-button').click()
    cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').should('be.visible').should("have.text",'Required');
    cy.get(':nth-child(3) > .oxd-input-group > .oxd-text').should('be.visible').should("have.text",'Required');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('have.css', 'border-color', 'rgb(235, 9, 16)');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('have.css', 'border-color', 'rgb(235, 9, 16)');

});

it("login with blank Username", function(){
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
    cy.get('.oxd-button').click()
    cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').should('be.visible').should("have.text",'Required');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(" ").should('have.css', 'border-color', 'rgb(235, 9, 16)');
    

});

it("login with blank password", function(){
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
    cy.get('.oxd-button').click()
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('have.css', 'border-color', 'rgb(235, 9, 16)');
    cy.get(':nth-child(3) > .oxd-input-group > .oxd-text').should('be.visible').should("have.text",'Required');
    
    

});

it("login with blank Username & password", function(){
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.get('.oxd-button').click()
    cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').should('be.visible').should("have.text",'Required');
    cy.get(':nth-child(3) > .oxd-input-group > .oxd-text').should('be.visible').should("have.text",'Required');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('have.css', 'border-color', 'rgb(235, 9, 16)');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('have.css', 'border-color', 'rgb(235, 9, 16)');

});


}); 