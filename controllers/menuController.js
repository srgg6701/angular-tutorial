"use strict";

app.controller('menuController',
    function menuController($scope, mainMenu){
        $scope.menus=mainMenu;
        console.dir($scope.menus);
});