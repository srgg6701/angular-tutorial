"use strict";

app.directive('navMenu', function(){
	return {
        restrict:'C', // controller
        templateUrl:'/templates/partials/menu.html'
    };
}).directive('bottomMenu', function(){
    return {
        restrict:'C', // controller
        templateUrl:'/templates/partials/bottom_menu.html'
    };
});