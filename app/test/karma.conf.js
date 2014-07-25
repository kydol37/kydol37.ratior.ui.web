module.exports = function(config){
  config.set({

    basePath : '../',

    frameworks: ['jasmine', 'requirejs'],
    
    files: [
			{pattern: 'main/js/*.js', included: false},
			{pattern: 'main/js/**/*.js', included: false},
			{pattern: 'test/unit.js', included: false},
			{pattern: 'test/unit/*.js', included: false},
			{pattern: 'test/unit/**/*.js', included: false},
			{pattern: 'main/lib/**/*.js', included: false},
			// needs to be last http://karma-runner.github.io/0.10/plus/requirejs.html
			'test/main-test.js'
	],
	
	// list of files to exclude
    exclude: [
    ],
    
    autoWatch : true,

    LogLevel: config.LOG_DEBUG,
    
    browsers : ['Chrome'],

    junitReporter : {
      outputFile: 'test/unit.xml',
      suite: 'unit'
    },
  
   //Continuous Integration mode
   // if true, Karma captures browsers, runs the tests and exits
   singleRun: false

  });
};
