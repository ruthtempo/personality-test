export {};

describe("Home", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("contains a card, a title and a card body with the test instructions", () => {
    cy.getByData("start-test-button").should("exist");
    cy.getByData("card-body").should("exist");
    cy.get("h2").should("exist");
  });
  it("start button exists and it leads you to the form route", () => {
    cy.getByData("start-test-button").should("exist").click();
    cy.location("pathname").should("eq", "/form");
  });
});
