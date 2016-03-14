'use strict';

myWeatherApp.config(['$urlRouterProvider', '$stateProvider',  function ($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state ('finder', {
            url: '/',
            templateUrl: 'js/components/finder/finderView.html',
            controller: 'finderCtrl'
        })
            .state ('favorites', {
            url: '/favorites',
            templateUrl: 'js/components/favorites/favoritesView.html',
            controller: 'favoritesCtrl'
        });
    }]);