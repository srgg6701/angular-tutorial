'use strict';
var app = angular.module('tApp',[]);

app.provider('mainMenu', function(){
    this.$get = function() {
        return {
            default:[
                'default'
            ],
            workflow:[
                'skeleton',
                'dynamic',
                'jquery',
                'server',
                'crud',
                'tests'
            ],
            architecture:[
                'controllers',
                'views',
                'directives',
                'scope',
                'services'
            ],
            resources:[
                'learning',
                'best'
            ],
            xtra:[
                'contacts',
                'test'
            ]
        }
    };
});

app.config( function($routeProvider, $locationProvider, mainMenuProvider){
    //console.dir(mainMenuProvider.$get().menu);
    // адреса разделов:
    var menus,sections = mainMenuProvider.$get();
    for(var section in sections) {
        menus = sections[section]; // default, workflow, architecture, resources, xtra
        for (var i in menus) {
            var start = (menus[i] === 'default') ? '' : menus[i];
            $routeProvider.when('/' + start, {
                templateUrl: 'templates/' + menus[i] + '.html',
                controller: menus[i] + 'Controller'
            });
        }
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