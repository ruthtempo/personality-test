export {};

describe("Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/form");
  });

  it("hast two answer/option buttons", () => {
    cy.getByData("option-0").should("exist");
    cy.getByData("option-1").should("exist");
  });

  it.only("when an answer is clicked, it gets saved in localStorage", () => {
    for (let i = 1; i <= 40; i++) {
      cy.getByData("option-0")
        .click()
        .then(() => {
          const localStorage: string[] = JSON.parse(
            window.localStorage.getItem("MyAnswers") ?? "[]"
          );
          expect(localStorage.length).eq(i);
        });
    }

    cy.get("canvas").should("exist");
    cy.getByData("reset-button").click();
    cy.location("pathname").should("eq", "/");
  });
});
