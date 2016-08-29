(function() {
  'use strict';

  var module = angular.module('app', ['ngRoute']);

  // module.config(function($routeProvider) {
  //   $routeProvider
  //   .when('/womens', {template: ""})
  //   .when('/womens/products', {template: "<all-products></all-products>"}) //this is where components go.
  // })
module.config(function($stateProvider, $urlRouterProvider){

$locationProvider.html5Mode(true);

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: './app/component/home/home.html',
    controller: 'productsCtrl'
  },
  .state('specificProduct'), {
    url: '/womens/:id',
    templateUrl: './app/component/specificProduct/specificProductInfo.html',
    controller: 'productsCtrl'
  },

  .state('womens', {
    url: '/womens',
    templateUrl: './app/component/products/products.html',
    controller: 'productsCtrl'
  },
      .state('flats', {
        url: '/womens/flats',
        templateUrl: './app/component/flats/flats.html',
        controller: 'productsCtrl'
      }),
      .state('heels', {
        url: '/womens/heels',
        templateUrl: './app/component/heels/heels.html',
        controller: 'productsCtrl'
      }),
  .state('cart', {
    url: '/cart',
    templateUrl: './app/component/cart/cart.html',
    controller: 'cartCtrl'
  }),
  .state('admin', {
    url: '/admin',
    templateUrl: './app/component/admin/login/login.html',
    controller: 'loginCtrl'
  })

    $urlRouterProvider
        .otherwise('/');
  })

})

  //cart needs to do a resolve for checkuser and then redirect to auth/facebook and then login now needs its own modal
