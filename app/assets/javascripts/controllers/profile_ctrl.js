this.ProfileCtrl = function($scope, $http, CurrentUser) {

  $scope.user = CurrentUser.get()

  $scope.updateProfile = function() {
    $http({
      method: "PUT",
      url: "/users",
      data: {
        first_name: $scope.user.firstName,
        last_name: $scope.user.lastName,
        email: $scope.user.email,
        avatar: $scope.user.imageURL
      }
    })
    console.log("$scope", $scope.user)
  }

  $scope.updatePass = function() {
    console.log("$scope", $scope.user)
  }
}
