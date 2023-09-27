///<reference types="Cypress" />

describe("Verifying PIM page of Orange-HRM", function () {
    it("login-->navigation-->PIM", function () {
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
          cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text').click();
    cy.window().then((win) => {
      cy.wrap(win.location.href).should(
        "include",
        "pim/viewEmployeeList"
      );
    });
    //verifying existing employee list
    cy.get('.oxd-table-filter-header-title > .oxd-text').should('have.text',"Employee Information")
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input')
    .type("nopnopnop")
    cy.get(':nth-child(2) > .oxd-input').type("0024")
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();
    cy.get("div[role='listbox']").contains("Full-Time Permanent").click();
    cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true});

    //trying to add new employee
    cy.get('.orangehrm-header-container > .oxd-button').click()
    cy.window().then((win) => {
        cy.wrap(win.location.href).should(
          "include",
          "pim/addEmployee"
        );
        });
      cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type("new")
      cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type("leap")
      cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type("year")
      cy.get('.oxd-button--secondary').click()

      //trying to verify Reports
      cy.get('.oxd-topbar-body-nav > ul > :nth-child(4)').click()
      cy.get('.oxd-autocomplete-text-input > input').type("Employee")
      cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true})

      //trying to add new Reports
      cy.get('.orangehrm-header-container > .oxd-button').click({force: true})
      cy.get(':nth-child(2) > .oxd-input').type("confidential")
      cy.get(':nth-child(3) > .oxd-grid-4 > .orangehrm-report-criteria > .oxd-input-field-bottom-space > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input')
      .click()
      cy.get("div[role='listbox']").contains("Pay Grade").click();

      cy.get(':nth-child(3) > .oxd-grid-4 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
      .click()
      cy.get("div[role='listbox']").contains("Past Employees Only").click();

      cy.get(':nth-child(5) > .oxd-grid-4 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
      .click()
      cy.get("div[role='listbox']").contains("Job").click();

      cy.get(':nth-child(5) > .oxd-grid-4 > .orangehrm-report-criteria > .oxd-input-field-bottom-space > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
      .click()
      cy.get("div[role='listbox']").contains("Location").click();

      cy.get(':nth-child(5) > .oxd-grid-4 > .orangehrm-report-criteria > :nth-child(2) > :nth-child(2) > .oxd-icon-button > .oxd-icon').click()
      cy.get('.--offset-column-1 > .oxd-icon-button').click()
      cy.get(':nth-child(5) > .oxd-grid-4 > .orangehrm-report-criteria > .oxd-input-field-bottom-space > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
      .click()
      cy.get("div[role='listbox']").contains("Job Title").click();
      cy.get(':nth-child(5) > .oxd-grid-4 > .orangehrm-report-criteria > :nth-child(2) > :nth-child(2) > .oxd-icon-button > .oxd-icon').click()
      cy.get('.oxd-button--secondary').click({force: true})
    });
});