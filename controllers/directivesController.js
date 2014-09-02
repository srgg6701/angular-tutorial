"use strict";

app.controller('directivesController', function directivesController($scope){
    $scope.code ={
        code1: '<div my-dir></div>',
        code2: '<div class="my-dir"></div>'
    };
});