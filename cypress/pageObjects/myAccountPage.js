class AccountPage {

    webLocators = {
        searchField: '.form-control.input-lg',
        clickSearachIcon: '.btn.btn-default.btn-lg',
        iphoneImage: "img[alt= 'iPhone'].img-responsive",
        addToCart: ".button-group>button:nth-child(1)",
        successMessage: '.alert.alert-success.alert-dismissible'
    }

    searchProduct(productName) {
        cy.get(this.webLocators.searchField).type(productName);
        cy.get(this.webLocators.clickSearachIcon).click();
    };

    addToCart() {
        cy.get(this.webLocators.addToCart).click();
    };

    verifyIphoneDisplayed(){
        return cy.get(this.webLocators.iphoneImage);
    };

    verifyItemIsAdded() {
        return cy.get(this.webLocators.successMessage);
    };

}
export default AccountPage;