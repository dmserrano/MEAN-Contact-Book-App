'use strict';

/////////////////////////////////////////
const app = angular.module('ContactApp', ['ngRoute'])
.config(($routeProvider) => {

  $routeProvider
  .when('/', {
    controller: 'MainCtrl',
    templateUrl: 'partials/main.html'
  })

});
/////////////////////////////////////////
