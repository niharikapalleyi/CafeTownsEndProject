function loginPage() {
		
		this.userInput = element(by.model('user.name'));
		this.passInput = element(by.model('user.password'));
		this.loginButton = element(by.cssContainingText('.main-button','Login'));
		this.invalidTextMessage = element(by.className('error-message ng-binding'));
}

module.exports = new loginPage();