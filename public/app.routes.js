(function() {
  'use strict';

  var module = angular.module('app', ['ngRoute']);

  // module.config(function($routeProvider) {
  //   $routeProvider
  //   .when('/womens', {template: ""})
  //   .when('/womens/products', {template: "<all-products></all-products>"}) //this is where components go.
  // })
module.config(function($stateProvider, $urlRouterProvider){
  $stateProvider


  .state('specific-product'), {
    url: '/product/:id',
    templateUrl: './app/component/specificProduct/specificProductInfo.html',
    controller: 'productsCtrl'
  },
  .state('home-page', {
    url: 'home',
    templateUrl: './app/component/home/home.html',
    controller: 'productsCtrl'
  },
  state('')




)
})
