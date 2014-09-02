"use strict";

app.controller('directivesController', function directivesController($scope,Directives){
    $scope.code ={
        code1: '<div my-dir></div>',
        code2: '<div class="my-dir"></div>',
        doTemp1: Directives.doTemp1
    };
});