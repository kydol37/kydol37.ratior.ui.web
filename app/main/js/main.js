'use strict';

require.config({
	/*
	    baseUrl:
	    JavaScript 파일이 있는 기본 경로를 설정한다.
	        만약 data-main 속성이 사용되었다면, 그 경로가 baseUrl이 된다.
	    data-main 속성은 require.js를 위한 특별한 속성으로 require.js는 스크립트 로딩을 시작하기 위해 이 부분을 체크한다.
	*/
	
    baseUrl:'js',
    
	/*
	    paths: 
	    path는 baseUrl 아래에서 직접적으로 찾을 수 없는 모듈명들을 위해 경로를 매핑해주는 속성이다.
	    "/"로 시작하거나 "http" 등으로 시작하지 않으면, 기본적으로는 baseUrl에 상대적으로 설정하게 된다.
	 
	    paths: {
	        "exam": "aaaa/bbbb"
	    }
	 
	        의 형태로 설정한 뒤에, define에서 "exam/module" 로 불러오게 되면, 스크립트 태그에서는 실제로는 src="aaaa/bbbb/module.js" 로 잡을 것이다.
	    path는 또한 아래와 같이 특정 라이브러리 경로 선언을 위해 사용될 수 있는데, path 매핑 코드는 자동적으로 .js 확장자를 붙여서 모듈명을 매핑한다.
	*/
	
	paths: {
		jquery: '../lib/jquery/dist/jquery',
		angular: '../lib/angular/angular',
		angularRoute: '../lib/angular-route/angular-route',
		angularMocks: '../lib/angular-mocks/angular-mocks',
		text: '../lib/requirejs-text/text',
		"jquery-ui": "../lib/jquery-ui/jquery-ui",
		library: '../lib'
	},
	
	/*
    	shim:
    	AMD 형식을 지원하지 않는 라이브러리의 경우 아래와 같이 SHIM을 사용해서 모듈로 불러올 수 있다.
    	참고 : http://gregfranko.com/blog/require-dot-js-2-dot-0-shim-configuration/
	 */
	shim: {
		'angular': {
			deps:['jquery'],
			'exports' : 'angular'
		},
		'angularRoute': ['angular'],
		'angularMocks': {
			deps:['angular'],
			'exports': 'angular.mock'
		},
		'jquery-ui': {
			deps: ['jquery']
		}
	},
	priority: [
	    "angular"
	]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = "NG_DEFER_BOOTSTRAP!";

//requireJS를 활용하여 모듈 로드
require( [
	'text',			 //미리 선언해둔 path, css나 html을 로드하기 위한 requireJS 플러그인
	'jquery',        //미리 선언해둔 path, jQuery는 AMD를 지원하기 때문에 이렇게 로드해도 jQuery 또는 $로 호출할 수 있다.
	'angular',       //미리 선언해둔 path
	'jquery-ui',
	'app',			//app.js
	'routes'		//routes.js
   ], 
   
  function(text, $, angular){
		$(function(){
			angular.bootstrap(document, ['ratiorApp']);
		});
	}
);


