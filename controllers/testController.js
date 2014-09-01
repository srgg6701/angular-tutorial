"use strict";

app.controller('testController',
    function testController($scope, $http){
        console.log('Hello! Test controller comes here.');
        $scope.$watch('temp_model', function(newValue, oldValue) {
            console.log('oldValue: '+oldValue+', newValue: '+newValue);
            //update the DOM with newValue
        });
    });