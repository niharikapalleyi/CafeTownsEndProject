let loginpage = require('../pages/loginPage');
let homepage = require('../pages/homePage');
let createemployeepage = require('../pages/createEmployeePage');

describe('CafeTownsEnd Project', function() {

    let logindata = require('../data/loginData.js');
    let createdata = require('../data/createEmployeeData.js');

    beforeEach(function() {
		browser.get(logindata.testUser.baseURL);
	});

    it('Create Employee', function() {

		loginpage.userInput.sendKeys(logindata.testUser.usernamePass);
		loginpage.passInput.sendKeys(logindata.testUser.passwordPass);
        loginpage.loginButton.click();
        
        homepage.createButton.click();

        createemployeepage.firstNameInput.sendKeys(createdata.testData.firstname);
        createemployeepage.lastNameInput.sendKeys(createdata.testData.lastname);
        createemployeepage.startDateInput.sendKeys(createdata.testData.startdate);
        createemployeepage.emailInput.sendKeys(createdata.testData.email);
        createemployeepage.addButton.click();

       var empname = createdata.testData.firstname + ' ' + createdata.testData.lastname;
       expect(homepage.employeeList.last().getText()).toBe(empname);

       homepage.logoutButton.click();
    })

})