this.ProfileCtrl = function($scope, $http, CurrentUser) {
  $scope.user = app.CurrentUser;

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
  }
}
