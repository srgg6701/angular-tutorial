"use strict";

app.directive('setTitle', function($location){
    console.log($location.url());
    return{
        restrict:'A',
        template:'Hello, title!'
    }
})