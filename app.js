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
        $routeProvider.when(xtra_route+'/'+start,{
            templateUrl:    xtra_route+'templates/'+menu[i]+'.html',
            controller:     menu[i]+'Controller'
        });
    }
    $routeProvider.when(xtra_route+'/index.html',{
        templateUrl:    xtra_route+'templates/default.html',
        controller:     'defaultController'
    }).otherwise({
        templateUrl:    xtra_route+'templates/404.html',
        controller:     'defaultController'
    });
    $locationProvider.html5Mode(true);
});