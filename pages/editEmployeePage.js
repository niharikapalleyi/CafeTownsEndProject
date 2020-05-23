function EditEmployeePage() {

		this.backButton = element(by.className('subButton bBack'));
		this.firstNameInput = element(by.model('selectedEmployee.firstName'));
		this.lastNameInput = element(by.model('selectedEmployee.lastName'));
		this.startDateInput = element(by.model('selectedEmployee.startDate'));
		this.emailInput = element(by.model('selectedEmployee.email'));
		this.updateButton = element(by.cssContainingText('.main-button','Update'));
		this.deleteButton = element(by.cssContainingText('.main-button','Delete'));
	
}
module.exports = new EditEmployeePage();