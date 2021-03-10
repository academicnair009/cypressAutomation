context("passing test", () => {
    it("search google for cypress and find it in results", ()=>
    {
        cy.visit("www.google.com")
        cy.get(`[name="q"]`).type("Cypress testing")
        cy.get(`[name="q"]`).type("{enter}")
        cy.get('[id="center_col"]').should("contain", "Cypress")
    })
}