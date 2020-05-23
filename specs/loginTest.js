let loginpage = require('../pages/loginPage');
let homepage = require('../pages/homePage');

describe('CafeTownsEnd Project', function() {
	
	let logindata = require('../data/loginData.js');

	beforeEach(function() {
		browser.get(logindata.testUser.baseURL);
	});
	
	it('Login Success Testcase', function() {
		
		loginpage.userInput.sendKeys(logindata.testUser.usernamePass);
		loginpage.passInput.sendKeys(logindata.testUser.passwordPass);
		loginpage.loginButton.click();
		
		expect(homepage.usernameText.getText()).toEqual('Hello ' + logindata.testUser.usernamePass);

		homepage.logoutButton.click();
		
	})

	it('Login Failed Testcase', function() {

		browser.get(logindata.testUser.baseURL);
		loginpage.userInput.sendKeys(logindata.testUser.usernameFail);
		loginpage.passInput.sendKeys(logindata.testUser.passwordFail);
		loginpage.loginButton.click();

		expect(loginpage.invalidTextMessage.getText()).toEqual('Invalid username or password!');
	})
})