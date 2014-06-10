"use strict";

app.controller('test_controlController',
    function test_controlController($scope,getFileContents){
        //getFileContents.paramId = 'test_control';
        $scope.contents = getFileContents.getContents('test_control');
        console.dir($scope.contents);
		/*$scope.contents = getFileContents.getFileContents();
        $scope.contents.then(
            console.dir(contents)
        );*///console.log('');
});