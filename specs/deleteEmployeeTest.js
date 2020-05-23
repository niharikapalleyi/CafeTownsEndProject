let loginpage = require('../pages/loginPage');
let homepage = require('../pages/homePage');

describe('CafeTownsEnd Project', function() {

    let logindata = require('../data/loginData.js');

    beforeEach(function() {
		browser.get(logindata.testUser.baseURL);
	});

    it('Delete Employee', function() {

		loginpage.userInput.sendKeys(logindata.testUser.usernamePass);
		loginpage.passInput.sendKeys(logindata.testUser.passwordPass);
        loginpage.loginButton.click();

        var empname = homepage.employeeList.last().getText();
        homepage.employeeList.last().click();

        homepage.deleteButton.click().then(function(){    
            let ale = browser.switchTo().alert();
            ale.accept();
            browser.waitForAngular();
        })

        expect(homepage.employeeList.last().getText() === empname).toBe(false);

        homepage.logoutButton.click();
    })

})