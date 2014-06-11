"use strict";

app.controller('test_controlController',
    function test_controlController($scope,getFileContents){
        $scope.contents = getFileContents.getContents('test_control');
        $scope.contents.then(
            function(event){ // Resource object
                console.dir(event);
        });
        $scope.scrollTo = function(anchor){
            var sTop = $('a[name="'+anchor+'"]').offset().top;
            $('body').animate({scrollTop:sTop},300);
        };
        $scope.goTop = function(){
            $('body').animate({scrollTop:0},300);
        };
});