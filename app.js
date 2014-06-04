'use strict';
var app = angular.module('tApp',['ngResource'])
  .config( function($routeProvider, $locationProvider){
    $routeProvider
        .when('/',{
            templateUrl:'templates/default.html',
            controller: 'defaultController'
        })
        .when('/skeleton',{
            templateUrl:'templates/skeleton.html',
            controller: 'skeletonController'
        })
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