// we get all the test files automatically
var tests = [];
for (var file in window.__karma__.files) {
	if (window.__karma__.files.hasOwnProperty(file)) {
		if (/spec\.js$/i.test(file)) {
			tests.push(file);
		}
	}
}

require.config({
	paths: {
		angular: '/base/main/lib/angular/angular',
		angularRoute: '/base/main/lib/angular-route/angular-route',
		angularMocks: '/base/main/lib/angular-mocks/angular-mocks',
		text: '/base/main/lib/requirejs-text/text',
		fixtures: '/base/test/unit/fixtures'

	},
	baseUrl: '/base/main/js',
	shim: {
		'angular' : {'exports' : 'angular'},
		'angularRoute': ['angular'],
		'angularMocks': {
			deps:['angular'],
			'exports':'angular.mock'
		}
	},
	deps: tests,
	callback: window.__karma__.start
});
