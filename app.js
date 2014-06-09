'use strict';
var app = angular.module('tApp',[])
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
  .provider('getFileContents', function(param){
    this.paramId = param;
    this.$get = function(){
        var par = this.paramId;
        return{
            getContents:function(){
                return "paramId comes here: "+par;
            }
        }
    }
})
    /*.factory( 'getFileContents', // название сервиса; $ - не используется
        function($resourceProvider, $q){ // $q - promise-библиотека
            var resource = $resourceProvider('/data/contents/:id', {id:'@id'});
            return{ // возвращает данные (data), полученные из JSON-файла
                getFileContents: function(paramId){
                    var deffered = $q.defer(); // http://angular.ru/api/ng.$q
                    resource.get({
                        id:paramId
                    },
                    function(param){
                        deffered.resolve(param);
                    },
                    function(response){
                        deffered.reject(response);
                    });
                    return deffered.promise;
                }
            };
        }
)*/
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