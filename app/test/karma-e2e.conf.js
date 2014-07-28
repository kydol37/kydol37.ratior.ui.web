module.exports = function(config) {
	config.set({
		basePath: '../',
		frameworks: ['ng-scenario'],
		files: [
			'test/e2e/**/*.js'
		],

		autoWatch: false,

		browsers : ['Chrome', 'Firefox'],

		singleRun: true,

		proxies: {
			'/': 'http://localhost:8000/'
		},

		urlRoot: "__karma__",

		junitReporter: {
			outputFile: 'test/e2e.xml',
			suite: 'e2e'
		}
	});
};
