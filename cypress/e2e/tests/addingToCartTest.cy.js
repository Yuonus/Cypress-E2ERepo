import AccountPage from "../../pageObjects/myAccountPage.js"
import testData from '../../fixtures/testData.json'
const accountPageObj = new AccountPage();


describe('End to End adding to cart automation', () => {
    before(() => {
        cy.login(testData.login.email, testData.login.password);
    });

    it('Add To Cart Flow', ()=>{
        accountPageObj.searchProduct(testData.product.productName);
        accountPageObj.addToCart();
        accountPageObj.verifyIphoneDisplayed().should('exist');
        accountPageObj.verifyItemIsAdded().should('contain', testData.successMes.successMessage);
    });



});