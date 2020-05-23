
function CreateEmployeePage() {
	
		this.cancelButton = element(by.className('subButton bCancel'));
		this.firstNameInput = element(by.model('selectedEmployee.firstName'));
		this.lastNameInput = element(by.model('selectedEmployee.lastName'));
		this.startDateInput = element(by.model('selectedEmployee.startDate'));
		this.emailInput = element(by.model('selectedEmployee.email'));
		this.addButton = element(by.cssContainingText('.main-button','Add'));
	
}

module.exports = new CreateEmployeePage();