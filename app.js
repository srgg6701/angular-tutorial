'use strict';
var app = angular.module('tApp',[])
  .config( function($routeProvider, $locationProvider){
    // адреса разделов:
    var menu = [
        'default',
        // workflow
        'skeleton',
        'dynamic',
        'jquery',
        'server',
        'crud',
        'tests',
        // архитектура
        'controllers',
        'views',
        'directives',
        'scope',
        'services',
        // ресурсы
        'learning',
        'best',
        // доп. (скрыто)
        'contacts',
        'test'
    ];

    for(var i in menu){
        var start=(menu[i]=='default')? '':menu[i];
        $routeProvider.when('/'+start,{
            templateUrl:    'templates/'+menu[i]+'.html',
            controller:     menu[i]+'Controller'
        });
    }
    $routeProvider.when('/index.html',{
        templateUrl:    'templates/default.html',
        controller:     'defaultController'
    }).otherwise({
        templateUrl:    'templates/404.html',
        controller:     'defaultController'
    });
    $locationProvider.html5Mode(true);
});