this.ProfileCtrl = function($scope, $http) {

  $scope.updateProfile = function() {
    $http({
      method: "PUT",
      url: "/users",
      data: {
        first_name: $scope.user.firstName,
        last_name: $scope.user.lastName
      }
    })
    console.log("$scope", $scope.user)
  }

  $scope.updatePass = function() {
    console.log("$scope", $scope.user)
  }
}
