app.provider('Directives', function(){
    this.$get = function(){
        return{
            doTemp1:"<div>Temp 1 directive is working here...</div>"
        };
    };
});