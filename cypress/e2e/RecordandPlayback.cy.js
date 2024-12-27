/* ==== Test Created with Cypress Studio ==== */
it('recordandplayback', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('https://cor2test.repsrv.com/');
  cy.wait(5000);
  cy.get('#username').type('vselvin@republicservices.com');
  cy.get('#password').type('Beattylocation@24');
  cy.get('.c21f9f2f0 > .c643d8083').click();
  cy.wait(10000);
  cy.get('.leftmenu > .fa').click();
  cy.get('.usecleftmenu > :nth-child(4) > a > [translate=""]').click();
  cy.get('.row > :nth-child(1) > :nth-child(1) > .ng-untouched').check();
  cy.get('.text-right > .btn').click();
  /* ==== End Cypress Studio ==== */
});