this.ProfileCtrl = function($scope, $http) {

  $scope.updateProfile = function() {
    $http({
      method: "PUT",
      url: "/",
      data: {}
    })
    console.log("$scope", $scope.user)
  }

  $scope.updatePass = function() {
    console.log("$scope", $scope.user)
  }
}
