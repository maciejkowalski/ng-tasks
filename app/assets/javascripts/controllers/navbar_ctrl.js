this.NavbarCtrl = function($scope, $http, CurrentUser) {
  $scope.user = window.CurrentUser = app.CurrentUser = CurrentUser.get();
}
