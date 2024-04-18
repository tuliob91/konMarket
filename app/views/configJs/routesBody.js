angular.module("moduloBody").config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl:'app/views/home/home.html',
            controller:'homeController'
        })
        .otherwise({ redirectTo: '/' });
});