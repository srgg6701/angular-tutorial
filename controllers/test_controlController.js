"use strict";

app.controller('test_controlController',
    function test_controlController($scope,getFileContents){
        $scope.contents = getFileContents.getContents('test_control');
        $scope.contents.then(
            function(event){
                console.dir(event);
        });
});