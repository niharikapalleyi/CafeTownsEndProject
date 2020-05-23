let loginpage = require('../pages/loginPage');
let homepage = require('../pages/homePage');
let editemployeepage = require('../pages/editEmployeePage');

describe('CafeTownsEnd Project', function() {

    let logindata = require('../data/loginData.js');
    let editdata = require('../data/editEmployeeData.js');

    beforeEach(function() {
		browser.get(logindata.testUser.baseURL);
	});

    it('Edit Employee Data', function() {

		loginpage.userInput.sendKeys(logindata.testUser.usernamePass);
		loginpage.passInput.sendKeys(logindata.testUser.passwordPass);
        loginpage.loginButton.click();

        homepage.employeeList.last().click();

        homepage.editButton.click();
        
        editemployeepage.firstNameInput.clear().then(function(){
            editemployeepage.firstNameInput.sendKeys(editdata.testUserData.firstname);
        })

        editemployeepage.lastNameInput.clear().then(function(){
            editemployeepage.lastNameInput.sendKeys(editdata.testUserData.lastname);
        })
        
        editemployeepage.updateButton.click();

        expect((homepage.employeeList.last()).getText()).toBe((editdata.testUserData.firstname + ' ' + editdata.testUserData.lastname));

        homepage.logoutButton.click();
    })

})