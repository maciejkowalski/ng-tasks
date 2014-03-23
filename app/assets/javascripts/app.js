var app = angular.module("Masters", ["ngResource"]);

app.factory("List", [
  "$resource", function($resource) {
    return $resource("lists/:id", {id: "@id"}, {update: {method: "PUT"}});
  }
]);

this.MainCtrl = [
  "$scope", "Entry", function($scope, Entry) {
    $scope.lists = List.query();

    $scope.addList = function() {
      var list = List.save($scope.newList);
      $scope.lists.push(list);
      return $scope.newList = {};
    }
  }
]
