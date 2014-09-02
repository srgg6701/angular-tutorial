"use strict";
/**
 * Извлечение данных из файла
 */
app.factory('getFileContents',
    function($resource, $q){
        return {
            getContents: function (param) { // http://stackoverflow.com/questions/24129421/can-i-pass-a-param-from-controller-into-service-in-angularjs
                //return "paramId comes here: "+param;
                var deffered = $q.defer(); // http://angular.ru/api/ng.$q
                $resource('/data/contents/:filename',{ filename:param })
                    .get(
                    function(event){
                        deffered.resolve(event);
                    },
                    function(response){
                        deffered.reject(response);
                    });
                return deffered.promise;
            }
        }
    }
);