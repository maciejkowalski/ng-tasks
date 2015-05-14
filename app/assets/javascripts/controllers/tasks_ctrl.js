this.TasksCtrl = [
    "$scope", "$routeParams", "Task", "List", function($scope, $routeParams, Task, List) {
        $scope.task = Task.get({
            id: $routeParams.id,
            list_id: $routeParams.list_id
        }, function (task) { });

        console.log("scope $task", $scope.task);

        $scope.updateTask = function(task) {
            console.log('task data', task)
            //Task.update({id: $routeParam.id, list_id: $routeParams.list_id, task: {}});
        };
    }
];