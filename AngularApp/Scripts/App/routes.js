'use strict';

sduttaApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl: '/AngularApp/pages/home.html',
            controller: 'homeController'
        })
        .when('/test', {
            templateUrl: '/AngularApp/pages/test.html',
            controller: 'testController'
        })
        .when('/services/:servicename', {
            templateUrl: '/AngularApp/pages/services.html',
            controller: 'servicesController'
        })
        .when('/blogs/:blogname', {
            templateUrl: '/AngularApp/pages/services.html',
            controller: 'servicesController'
        })
        .otherwise({
            templateUrl: '/AngularApp/pages/home.html',
            controller: 'homeController'
        });

    $locationProvider.hashPrefix('');
    $locationProvider.html5Mode(true);
});