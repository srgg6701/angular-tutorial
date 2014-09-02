"use strict";
app.controller('defaultController',
    function defaultController($scope,mainMenu){
        //console.dir(mainMenu);
        $scope.menus=mainMenu;
		//$scope.title="AngularJS the SuperHeroic tutorial";
        $scope.toggleSubmenu=function(header){
            //usefor: использование jquery
            $(header).parent().find('ul').fadeToggle(300);
        }
})
/* Получить меню, которое будет извлекаться в соответствующем шаблоне */
.controller('menuController',
    function menuController($scope, mainMenu){
        $scope.menus=mainMenu;
    }
);