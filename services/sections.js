app.provider('mainMenu', function(){
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
                ['best','Лучшие практики'],
                ['components','Компоненты']
            ],
            xtra:[
                ['contacts','Контакты'],
                ['test','Тестовый раздел']
            ]
        }
    };
});