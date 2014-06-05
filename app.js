'use strict';
var app = angular.module('tApp',[])
  .provider('mainMenu', function(){
    this.$get = function() {
        return {
            default:[
                ['default','Главная']
            ],
            workflow:[
                ['skeleton','Каркас сайта'],
                ['dynamic','Динамические данные'],
                ['jquery','Использование jQuery'],
                ['server','Сервер'],
                ['crud','CRUD'],
                ['tests','Тестирование']
            ],
            architecture:[
                ['controllers','Контроллеры'],
                ['scope','Область видимости'],
                ['views','Представления'],
                ['directives','Директивы'],
                ['services','Сервисы']
            ],
            resources:[
                ['learning','Обучение'],
                ['best','Лучшие практики']
            ],
            xtra:[
                ['contacts','Контакты'],
                ['test','Тестовый раздел']
            ]
        }
    };
})
  .controller('menuController',
    function menuController($scope, mainMenu){
        $scope.menus=mainMenu; //console.dir($scope.menus);
})
  .config( function($routeProvider, $locationProvider, mainMenuProvider){
    //console.dir(mainMenuProvider.$get().menu);
    // адреса разделов:
    var alias,menus,sections = mainMenuProvider.$get();
    for(var section in sections) {
        menus = sections[section]; // default, workflow, architecture, resources, xtra
        if(section!='default')
            $routeProvider.when('/' + section, {
                templateUrl: 'templates/sections/' + section + '.html',
                controller: 'menuController'
            });
        for (var i in menus) {
            alias = menus[i][0];
            var start = (alias === 'default') ? '' : alias;
            $routeProvider.when('/' + start, {
                templateUrl: 'templates/' + alias + '.html',
                controller: alias + 'Controller'
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