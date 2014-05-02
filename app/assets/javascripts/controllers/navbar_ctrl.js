this.NavbarCtrl = function($scope, $http, CurrentUser) {
  $scope.user = CurrentUser.get()
}
