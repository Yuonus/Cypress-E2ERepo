export class RegistrationPage {

    // Defining the locators of the page
pageLocators={
    firstName: '#input-firstname',
    lastName: '#input-lastname',
    email: '#input-email',
    telephone: '#input-telephone',
    password: '#input-password',
    confirmPwd: '#input-confirm',
    policyCheckBox: "[type='checkbox']",
    continueBtn: "[value='Continue']"
}

openURL (){
    cy.visit(Cypress.env('URL'));
}


// Defining the actions of the page:
enterFirstName(fName){
    cy.get(this.pageLocators.firstName).type(fName);
};

enterLastName(lName){
    cy.get(this.pageLocators.lastName).type(lName);
};

enterEmail(emailID){
    cy.get(this.pageLocators.email).type(emailID);
};

enterTelephoneNumber(pNumber){
    cy.get(this.pageLocators.telephone).type(pNumber);
};

// enterPassword(pwd){
//     cy.get(this.pageLocators.password).type(pwd);
// };

// enterConfirmPwd(confirmPass){
//     cy.get(this.pageLocators.confirmPwd).type(confirmPass);
// };

// Since we're passing the same value to both the Password and Confirm Password input fields, we can handle both locators within a single method.
enterPassword(pwd){
    cy.get(this.pageLocators.password).type(pwd);
    cy.get(this.pageLocators.confirmPwd).type(pwd);
};

selectPrivacyPolicyCheckBox(){
    cy.get(this.pageLocators.policyCheckBox).click();
};

clickContinueBtn(){
    cy.get(this.pageLocators.continueBtn).click();
};


}
// to add
// export default RegistrationPage;