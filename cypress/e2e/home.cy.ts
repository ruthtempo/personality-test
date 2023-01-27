export {};

describe("Home", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("contains a start button,  card, a title and a card body with the test instructions", () => {
    cy.getByData("start-test-button").should("exist");
    cy.getByData("card-body").should("exist");
    cy.get("h2").should("exist");
  });
  it("navigates the user to the form when start button is clicked and the name field is not empty", () => {
    cy.getByData("name-input").type("Ruth");
    cy.getByData("start-test-button").click();
    cy.location("pathname").should("eq", "/form");
  });

  it("shows an error message if start button is clicked without name input", () => {
    cy.getByData("name-input").should("have.value", "");
    cy.getByData("start-test-button").click();
    cy.getByData("error-no-name").should("exist");
  });

  it("when start button is clicked, test progress is resetted", () => {
    cy.getByData("start-test-button")
      .click()
      .then(() => {
        const localStorage: string[] = JSON.parse(
          window.localStorage.getItem("MyAnswers") ?? "[]"
        );
        expect(localStorage.length).eq(0);
      });
  });
});
