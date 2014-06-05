'use strict';
var app = angular.module('tApp',[]);

app.provider('mainMenu', function(){
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
                ['views','Область видимости'],
                ['directives','Представления'],
                ['scope','Директивы'],
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
});

app.config( function($routeProvider, $locationProvider, mainMenuProvider){
    //console.dir(mainMenuProvider.$get().menu);
    // адреса разделов:
    var alias,menus,sections = mainMenuProvider.$get();
    for(var section in sections) {
        menus = sections[section]; // default, workflow, architecture, resources, xtra
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