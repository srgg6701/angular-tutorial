"use strict";

app.controller('menuController',
    function menuController($scope, mainMenu){
        $scope.menus=mainMenu; //.menu
        console.dir($scope.menus);
});