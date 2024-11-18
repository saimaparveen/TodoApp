describe("To-Do Application E2E Tests", () => {
  beforeEach(() => {
    // Visit the application URL before each test
    cy.visit("http://localhost:5173/");
  });

  it("adds a new to-do item", () => {
    cy.get("#content").type("New To-Do Item");
    cy.get('[type="radio"]').check("1").click();
    cy.get("button").contains("Add").click();

    // Verify that the new to-do item is added to the list
    cy.get(".todo-item").should("contain.text", "New To-Do Item");
  });

  it("removes a to-do item", () => {
    cy.get("#content").type("New To-Do Item");
    cy.get('[type="radio"]').check("1").click();
    cy.get("button").contains("Add").click();
    cy.get("#content").type("To-Do to Remove");
    cy.get('[type="radio"]').check("1").click();
    cy.get("button").contains("Add").click();

    // Click the delete icon on the new to-do item
    cy.get(".todo-item")
      .contains("To-Do to Remove")
      .parent()
      .find(".material-icons.dlt")
      .click();

    // Verify that the item is removed from the list
    cy.get(".todo-item").should("not.contain.text", "To-Do to Remove");
  });

  //   it("edits an existing to-do item", () => {
  //     cy.get("input[type='text']").type("Editable To-Do");
  //     cy.get('[type="radio"]').check("1").click();
  //     cy.get("button").contains("Add").click();

  //     // Double-click to edit the item
  //     cy.get(".todo-item").contains("Editable To-Do").dblclick();
  //     cy.get(".todo-item input[type='text']").clear().type("Edited To-Do").blur();

  //     // Verify that the item text is updated
  //     cy.get(".todo-item").should("contain.text", "Edited To-Do");
  //   });

  it("toggles to-do item completion status", () => {
    cy.get("#content").type("To-Do for Toggling");
    cy.get('[type="radio"]').check("1").click();
    cy.get("button").contains("Add").click();

    // Click to toggle the item's done status
    cy.get(".todo-item").contains("To-Do for Toggling").click();

    // Verify that the item is marked as completed
    cy.get(".todo-item").should("have.class", "done");
  });

  it("persists data after page reload", () => {
    cy.get("#content").type("Persistent To-Do");
    cy.get('[type="radio"]').check("1").click();
    cy.get("button").contains("Add").click();
    cy.reload();
    // Verify that the item still exists
    cy.get(".todo-item").should("contain.text", "Persistent To-Do");
  });
});
