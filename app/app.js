'use strict'
define(['angular', 'ngRoute', 'ngBootstrap', 'velocity', 'services/routeResolver'], function (angular, ngRoute, ngBootstrap) {

    var app = angular.module('avalon', [
        // Angular modules
        'ngRoute',

        // Custom modules
        'routeResolverServices'
    ])

    app.config(function ($routeProvider, routeResolverProvider, $controllerProvider, $provide, $filterProvider, $compileProvider) {

        app.register = {
            controller: $controllerProvider.register,
            directive: $compileProvider.directive,
            filter: $filterProvider.register,
            factory: $provide.factory,
            service: $provide.service
        };

        routeResolverProvider.routeConfig.setBaseDirectories('app/views/', 'app/controllers/');


        /**
         * config routes for app
         * @type {routeResolver.route|*}
         */
        var route = routeResolverProvider.route;

        $routeProvider
            .when('/', route.resolve('home'))
            .when('/release', route.resolve('release'))
            .when('/page2', route.resolve('page2'))
            .when('/error', route.resolve('error'))
            .otherwise({ redirectTo: '/error' });
    });





    return app;

});