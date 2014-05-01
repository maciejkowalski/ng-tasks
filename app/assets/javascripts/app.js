var app = angular.module("Masters", ["ngResource", 'ngRoute', 'mk.editablespan']);

app.config([
  "$httpProvider", function($httpProvider) {
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
    $httpProvider.defaults.headers.common['Accept'] = "application/json"
  }
]);

app.config(["$routeProvider", "$locationProvider",
  function($routeProvider, $locationProvider) {
    $routeProvider.when("/", {
      redirectTo: '/dashboard',
    });
    $routeProvider.when("/dashboard", {
      templateUrl: "/main.html",
      controller: "MainCtrl"
    });
    $routeProvider.when('/profile', {
      templateUrl: "/profile.html",
      controller: "ProfileCtrl"
    });
  }
]);

app.factory("List", [
  "$resource", function($resource) {
    return $resource("lists/:id", {id: "@id"}, {update: {method: "PATCH"}});
  }
]);

app.factory("Task", [
  "$resource", function($resource) {
    return $resource("/lists/:list_id/tasks/:id", {list_id: "@list_id", id: "@id"}, {update: {method: "PATCH"}})
  }
]);

app.factory("CurrentUser", [
  "$resource", function($resource) {
    return $resource('/users/user')
  }
]);
