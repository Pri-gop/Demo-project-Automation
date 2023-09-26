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
    cy.get(":nth-child(5) > .oxd-main-menu-item > .oxd-text").click();
    cy.window().then((win) => {
      cy.wrap(win.location.href).should(
        "include",
        "recruitment/viewCandidates"
      );
    });
    cy.get(".orangehrm-header-container > .oxd-button").click();
    cy.window().then((win) => {
      cy.wrap(win.location.href).should("include", "recruitment/addCandidate");
    });
    cy.get(".orangehrm-card-container").should("be.visible");
    cy.get(
      '.oxd-grid-1 > .oxd-grid-item > [data-v-e75f8a7a=""] > :nth-child(1) > .oxd-label'
    ).contains("Full Name");
    cy.get(".--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input")
      .should("be.visible")
      .type("booboo");
    cy.get(":nth-child(2) > :nth-child(2) > .oxd-input")
      .should("be.visible")
      .type("buchi");
    cy.get(":nth-child(3) > :nth-child(2) > .oxd-input")
      .should("be.visible")
      .type("OOH");
    cy.get(
      ":nth-child(2) > .oxd-grid-3 > .oxd-grid-item > .oxd-input-group > .oxd-input-group__label-wrapper"
    ).contains("Vacancy");
    //handling bootstrap dropdowns - hidden dropdown Values
    cy.get(".oxd-select-text").click();
    cy.get("div[role='listbox']").contains("Payroll Administrator").click();
    //handled bootstrap dropdowns - hidden dropdown Values
    cy.get(
      ":nth-child(3) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("abcd@gmail.com");
    cy.get(
      ".oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("9771238939");
    cy.fixture("dummy.docx").then((fileContent) => {
      cy.log("Attempting to attach the file...");
      cy.get(".oxd-file-button")
        .should("exist")
        .should("be.visible")
        .attachFile({
          fileContent,
          fileName: "dummy.docx",
          mimeType:
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        });
    });
    // After uploading the file, checking for clearance...
    cy.get(".oxd-file-button").should("not.have.value", "dummy.docx");
    cy.get('.orangehrm-save-candidate-page-full-width > .oxd-input-group > :nth-child(2) > .oxd-input')
    .type("new candidate");
    cy.get('.oxd-date-input > .oxd-input').should("be.visible")
    cy.get('.oxd-textarea').click().type("testing notes");
    cy.get('input[type="checkbox"]').check({force: true})
    cy.get('.oxd-layout-footer > :nth-child(1)').should("be.visible").and("have.text",'OrangeHRM OS 5.5')
    cy.get('.oxd-layout-footer > :nth-child(2)').should("be.visible")
    cy.get('.oxd-button--secondary').click()

  });
});
