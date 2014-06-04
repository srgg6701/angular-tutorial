'use strict';
var app = angular.module('tApp',[])
  .config( function($routeProvider, $locationProvider){
    $routeProvider
        .when('/',{
            templateUrl:'templates/default.html',
            controller: 'defaultController'
        })		
		// Workflow
        .when('/skeleton',{
            templateUrl:'templates/skeleton.html',
            controller: 'skeletonController'
        })
        .when('/dynamic',{
            templateUrl:'templates/dynamic.html',
            controller: 'dynamicController'
        })
		.when('/server',{
            templateUrl:'templates/server.html',
            controller: 'serverController'
        })
		.when('/crud',{
            templateUrl:'templates/crud.html',
            controller: 'crudController'
        })
		// Архитектура
        .when('/controllers',{
            templateUrl:'templates/controllers.html',
            controller: 'controllersController'
        })
        .when('/directives',{
            templateUrl:'templates/directives.html',
            controller: 'directivesController'
        })
        .when('/scope',{
            templateUrl:'templates/scope.html',
            controller: 'scopeController'
        })
        .when('/services',{
            templateUrl:'templates/services.html',
            controller: 'servicesController'
        })
        .when('/views',{
            templateUrl:'templates/views.html',
            controller: 'viewsController'
        })
		// Ресурсы		
        .when('/learning',{
            templateUrl:'templates/learning.html',
            controller: 'learningController'
        })
        .when('/best',{
            templateUrl:'templates/best.html',
            controller: 'bestController'
        })
		// зарезервировано:
        .when('/contacts',{
            templateUrl:'templates/contacts.html',
            controller: 'contactsController'
        })
        .when('/test',{
            templateUrl:'templates/test.html',
            controller: 'testController'
        })
        .otherwise({
            templateUrl:'templates/404.html',
            controller: 'defaultController'
        });
    $locationProvider.html5Mode(true);
});