
// import { RegistrationPage } from "../../pageObjects/registrationPage";
// const regObj = new RegistrationPage();
// import registerData from '../../fixtures/registerData.json'

// describe('Automating the Registration Page', ()=>{
//     it('Registration flow of the application', function(){
//         regObj.openURL();
//         regObj.enterFirstName(registerData.firstName);
//         regObj.enterLastName(registerData.lastName);
//         regObj.enterEmail(registerData.email);
//         regObj.enterTelephoneNumber(registerData.telephone);
//         regObj.enterPassword(registerData.password);
//         // regObj.enterConfirmPwd(registerData.confirmPwd);  Not needed as we have used both locators under one method
//         regObj.selectPrivacyPolicyCheckBox();
//         regObj.clickContinueBtn();
//     });
// });

import { RegistrationPage } from "../../pageObjects/registrationPage";
const regObj = new RegistrationPage();
// import registerData from '../../fixtures/registerData.json'

describe('Automating the Registration Page', () => {
  it('Registration flow of the application', function () {
    cy.fixture('registerData.json').then((data) => {
      const timestamp = Date.now();
      data.email = `stech${timestamp}@automation.com`;
      cy.log(`Using email: ${data.email}`);
      regObj.openURL();
      regObj.enterFirstName(data.firstName);
      regObj.enterLastName(data.lastName);
      regObj.enterEmail(data.email); // no more undefined!
      regObj.enterTelephoneNumber(data.telephone);
      regObj.enterPassword(data.password);
      regObj.selectPrivacyPolicyCheckBox();
      regObj.clickContinueBtn();
    });
  });
});