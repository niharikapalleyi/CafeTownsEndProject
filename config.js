var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
		//seleniumAddress: 'http://localhost:4444/wd/hub',
		specs: ['specs/loginTest.js', 'specs/createEmployeeTest.js', 'specs/editEmployeeTest.js', 'specs/deleteEmployeeTest.js'],
		framework: 'jasmine',
		//directConnect: true,
		capabilities: {
			browserName: 'chrome'
		},
		jasmineNodeOpts: {
			showColors: true,
		},

		onPrepare: function() {
			
			browser.driver.manage().window().maximize();
			jasmine.getEnv().addReporter(
				new Jasmine2HtmlReporter({
				  savePath: 'target/reports-screenshots'
				})
			)
		}
};