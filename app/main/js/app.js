'use strict';

//requireJS 모듈 선언 - [myApp 앵귤러 모듈]
define([
	'angular',		//앵귤러 모듈을 사용하기 위해 임포트
	'filters',
	'services',
	'directives',
	'controllers',
	'angularRoute',
	], 
	
	//디펜던시 로드뒤 콜백함수
	function (angular, filters, services, directives, controllers) {

		// Declare app level module which depends on filters, and services
		//모듈 선언
		var app = angular.module('ratiorApp', [
					'ngRoute',
					'ratiorApp.filters',
					'ratiorApp.services',
					'ratiorApp.directives',
					'ratiorApp.controllers'
				]);
		
		//공통 컨트롤러 설정 - 모든 컨트롤러에서 공통적으로 사용하는 부분들 선언
		app.controller('CommonController', function($scope) {
		
			//스타일시트 업데이트
			 $scope.$on('updateCSS', function(event, args) {
			 
				//파라메터로 받아온 스타일 시트 반영
				$scope.stylesheets = args;
			});  
		});	
		
		return app;
	}	
);