this.ProfileCtrl = function($scope, $http, CurrentUser) {

  $scope.user = CurrentUser.get()

  $scope.updateProfile = function() {
    $http({
      method: "PUT",
      url: "/users",
      data: {
        first_name: $scope.user.first_name,
        last_name: $scope.user.last_name,
        email: $scope.user.email,
        avatar: $scope.user.avatar
      }
    })
    console.log("$scope", $scope.user)
  }

  $scope.updatePass = function() {
    $http({
      method: "PUT",
      url: "/users",
      data: {
        password: $scope.user.password,
        password_confirmation: $scope.user.passwordConfirmation
      }
    })
    console.log("$scope", $scope.user)
  }
}
