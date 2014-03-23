var app = angular.module("Masters", ["ngResource"]);

app.factory("List", [
  "$resource", function($resource) {
    return $resource("lists.json/:id", {id: "@id"}, {update: {method: "PUT"}});
  }
]);

this.MainCtrl = [
  "$scope", "List", function($scope, List) {
    $scope.lists = List.query();

    $scope.addList = function() {
      var list = List.save($scope.newList);
      $scope.lists.push(list);
      return $scope.newList = {};
    }
  }
]
