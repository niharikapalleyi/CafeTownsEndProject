
function HomePage() {

		this.usernameText = element(by.id('greetings'));
		this.logoutButton = element(by.cssContainingText('.main-button','Logout'));
		this.createButton = element(by.id('bAdd'));
		this.employeeList = element.all(by.repeater('employee in employees'));
		this.editButton = element(by.id('bEdit'));
		this.deleteButton = element(by.id('bDelete'));
	
}
module.exports = new HomePage();
