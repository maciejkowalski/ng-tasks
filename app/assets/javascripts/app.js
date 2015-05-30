var app = angular.module("Masters", ["ngResource", 'ngRoute', 'mk.editablespan', 'xeditable', 'angularFileUpload']);

app.run(function(editableOptions) {
    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});

app.config([
  "$httpProvider", function($httpProvider) {
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
    $httpProvider.defaults.headers.common['Accept'] = "application/json"
  }
]);

app.config(["$routeProvider", "$locationProvider",
  function($routeProvider, $locationProvider) {
    $routeProvider.when("/", {
      redirectTo: '/dashboard'
    });
    $routeProvider.when("/dashboard", {
      templateUrl: "/main.html",
      controller: "MainCtrl"
    });
    $routeProvider.when("/:list_id/task/:id", {
      templateUrl: "/task.html",
      controller: "TasksCtrl"
    });
    $routeProvider.when('/profile', {
      templateUrl: "/profile.html",
      controller: "ProfileCtrl"
    });
  }
]);

// /app/directives.js
app.directive('ngConfirmClick', [
    function(){
        return {
            priority: -1,
            restrict: 'A',
            link: function(scope, element, attrs){
                element.bind('click', function(e){
                    var message = attrs.ngConfirmClick;
                    if(message && !confirm(message)){
                        e.stopImmediatePropagation();
                        e.preventDefault();
                    }
                });
            }
        }
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

app.factory("Comment", [
    "$resource", function($resource) {
        return $resource('/comments/:id', {id: "@id"}, {update: {method: "PATCH"}})
    }
]);

app.factory("Attachment", [
    "$resource", function($resource) {
        return $resource('/attachments/:id', {id: "@id"}, {update: {method: "PATCH"}})
    }
]);