'use strict';
app .directive('doTemp1', function (){
        return{
            restrict:   'A',
            //replace:    true,
            template:   "<div>Temp 1 directive is working here...</div>"
            /*func:function(scope, element, attrs, controller){
             console.log('Temp is working now...');
             }*/
        };
    })
    .directive('doTemp2', function(){
        return{
            restrict:   'E',
            replace:    true,
            template:   '<div>Ok, and here the do-temp2 is coming...</div>'
        }
    })
    .directive('doTemp3', function(){
        return{
            restrict:   'C',
            //replace:    true,
            template:   '<div>And at last but not least the temp3 is here for your pleasure!</div>'
        }
    })
    .directive('doLink',  function (){
            return{
                restrict:   'E',
                replace:    true,
                template:   '<a href="javascript:void(0)">Click me!</a>',
                link:function(scope, element){
                    element.bind('click', function(){
                        alert('clicked!')
                    });
                    //element.html('<div>Got here because of "link" in the directive!</div>');
                }
            };
    })
    .directive('doCompile',  function ($compile){ //$compile
            return{ // The $compile service walks the DOM tree looking for DOM elements with directives declared on them
                restrict:   'E',
                link:function(scope, element){/*, attrs, controller*/
                    var elementHTML = '<div>Compiled content comes here!</div>';
                    angular.element(element).html($compile(elementHTML)(scope));
                }
            }
    });
