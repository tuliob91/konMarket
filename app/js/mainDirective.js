angular.module('moduloPrincipal').directive('mainDirective',function(){
    return {
        templateUrl:'app/views/layout/main.html'
    };
});
angular.module('moduloPrincipal').directive('headerDirective',function(){
    return {
        templateUrl:'/app/views/layout/header.html'
    };
});