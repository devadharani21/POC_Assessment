import { locators } from "../support/Locators/secAlocators";
describe('login',function(){
        beforeEach(()=>{
        cy.fixture('testData').as('data');    
        cy.visit(locators.url);
        cy.wait(5000);
        cy.get(locators.email).type('vselvin@republicservices.com');
        cy.get(locators.password).type('Beattylocation@24');
        cy.contains('button', 'Continue').click();
        cy.wait(20000);
        cy.get(locators.sidemenu).click();
        cy.contains('span','Add New Profile').click();
        cy.get(locators.createNewTemplate).click();
        cy.get(locators.next).click();
        //dropdown
        cy.get(locators.template).select('<1000 ppm Mercury Remediation Debris');
        cy.contains('span','Select Facility...').click();
        cy.contains('div','Select All').click();
       // cy.contains('button','Next').click({force:true});
       // cy.get('button[type="submit"][class="btn nextbtn ng-star-inserted"]').click({force:true});
        cy.get(locators.next).click({force:true});
    })

it.skip('Data Validation', function() {
    cy.wait(5000);
    cy.get(locators.address1).invoke('val').should('be.empty');
    cy.get(locators.address2).invoke('val').should('be.empty');
    cy.get(locators.city).invoke('val').should('be.empty');
  });

  it.skip('Visibility', function() {
    cy.wait(5000);
    cy.get(locators.phone).should('be.visible');
    cy.get(locators.state).should('be.visible');
    cy.get(locators.zip).should('be.visible');
  });

  it.skip('Data fetched fro Json file', function() {
    cy.wait(5000);
    cy.get(locators.contact_name).type(this.data.name);
    cy.get(locators.contact_email).type(this.data.email);
    cy.get(locators.contact_phone).type(this.data.phone);
  });

  it.skip('Radio Buttom Validation', function() {
    cy.wait(5000);
    cy.get(locators.radiobutton1).should('not.be.checked');
    cy.get(locators.radiobutton2).should('not.be.checked');
    cy.get(locators.radiobutton3).should('not.be.checked'); 
    cy.get(locators.radiobutton4).should('not.be.checked');
    
  });

  it('Validate field is locked or not', function() {
    cy.wait(5000);
    cy.get(locators.address1).should('be.disabled');
    cy.get(locators.radiobutton1).should('be.disabled');
    cy.get(locators.state).should('be.disabled');
    cy.get(locators.contact_phone).should('be.enabled').type(this.data.phone);
    
  });


 })
