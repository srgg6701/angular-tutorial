"use strict";

app.controller('testController',
    function testController($scope, $http){
        console.log('Hello! Test controller comes here.');
        $scope.$watch('temp_model', function(newValue, oldValue) {
            console.log('oldValue: %c'+oldValue, 'color:brown');
            console.log('newValue: %c'+newValue,'color: violet');
            //update the DOM with newValue
        });
    });