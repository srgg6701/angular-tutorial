"use strict";

app.directive('navMenu', function(){
	return {
        restrict:'C', // controller
        templateUrl:'/templates/partials/menu.html'
    };
});