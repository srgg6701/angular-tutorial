"use strict";

app.controller('test_controlController',
    function test_controlController($scope,getFileContents){
        //getFileContents.paramId = 'test_control';
        $scope.contents = getFileContents.getContents('test_control');
        $scope.contents.then(
            function(event){
                console.dir(event);
            });
});