app.directive('clickMe1', function(){
    return{
        restrict: 'A',
        link:function(scope, elem){ // attrs
            elem.bind('click', function(){
                var def_color='rgb(0, 0, 0)';
                //console.log('color: '+elem.css('color'));
                elem.css('color', (elem.css('color')==def_color)? 'rgb(165, 42, 42)':def_color);
            });
        }
    }
}).directive('myDir', function(){
    return{
        restrict: 'C',
        link:function(scope, elem){ // attrs
            elem.bind('click', function(){
                var def_color='rgb(0, 0, 0)';
                //console.log('color: '+elem.css('color'));
                elem.css('color', (elem.css('color')==def_color)? 'rgb(165, 42, 42)':def_color);
            });
        }
    }
});