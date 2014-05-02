this.NavbarCtrl = function($scope, $http, CurrentUser) {
  $scope.user = app.CurrentUser = CurrentUser.get();
}
