'use strict';
var app = angular.module('tApp',['ngResource'])
  .provider('mainMenu', function(){
    // http://stackoverflow.com/questions/15666048/angular-js-service-vs-provider-vs-factory
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
                ['modules','Модули'],
                ['controllers','Контроллеры'],
                ['scope','Область видимости'],
                ['views','Представления'],
                ['directives','Директивы'],
                ['services','Сервисы']
            ],
            test_control:[
                ['test_control','Тест-контроль']
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
    /**
    получить меню, которое будет извлекаться
    в соответствующем шаблоне */
    function menuController($scope, mainMenu){
        $scope.menus=mainMenu;
    }
)
  .factory('getFileContents',
    function($resource, $q){
        var resource = $resource('/data/contents/:id', {id:'@id'});
        return {
            getContents: function (param) { // http://stackoverflow.com/questions/24129421/can-i-pass-a-param-from-controller-into-service-in-angularjs
                //return "paramId comes here: "+param;
                var deffered = $q.defer(); // http://angular.ru/api/ng.$q
                resource.get({
                        id:param
                    },
                    function(event){
                        deffered.resolve(event);
                    },
                    function(response){
                        deffered.reject(response);
                    }
                );
                return deffered.promise;
            }
        }
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