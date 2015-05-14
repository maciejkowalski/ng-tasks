this.TasksCtrl = [
    "$scope", "$routeParams", "Task", "List", function($scope, $routeParams, Task, List) {
        $scope.task = Task.get({
            id: $routeParams.id,
            list_id: $routeParams.list_id
        }, function (task) { });


        $scope.updateTask = function() {
            console.log("updateTask $scope.task", $scope.task)
            Task.update($scope.task)
        };
    }
];