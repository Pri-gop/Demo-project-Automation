///<reference types="Cypress" />

describe("Add candidate page of Orange-HRM", function () {
    it("login-->navigation-->adding candidate", function () {
        cy.visit(
            "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
          );
          cy.get(
            ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
          ).type("Admin");
          cy.get(
            ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
          ).type("admin123");
          cy.get(".oxd-button").click();
          cy.window().then((win) => {
            cy.wrap(win.location.href).should(
              "include",
              "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard"
            );
          });
          cy.get(':nth-child(6) > .oxd-main-menu-item > .oxd-text').click();
    cy.window().then((win) => {
      cy.wrap(win.location.href).should(
        "include",
        "pim/viewPersonalDetails/empNumber"
      );
    });
    cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type("John");
    cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type("nop");
    cy.get('.employee-image').should("be.visible");
    cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click()
    //handling bootstrap dropdowns - hidden dropdown Values
    cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click();
    cy.get("div[role='listbox']").contains("O+").click();
    cy.get('.orangehrm-custom-fields > .orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button').click();
    cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button').click()
//footer check
    cy.get('.oxd-layout-footer > :nth-child(1)').should("be.visible").and("have.text",'OrangeHRM OS 5.5')
    cy.get('.oxd-layout-footer > :nth-child(2)').should("be.visible")
    cy.get(':nth-child(2) > .orangehrm-tabs-item')
    });
    
});