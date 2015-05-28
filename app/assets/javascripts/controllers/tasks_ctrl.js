this.TasksCtrl = [
    "$scope", "$routeParams", "Task", "Comment", function($scope, $routeParams, Task, Comment) {
        $scope.task = Task.get({
            id: $routeParams.id,
            list_id: $routeParams.list_id
        }, function (task) { });


        $scope.updateTask = function() {
            console.log("updateTask $scope.task", $scope.task)
            Task.update($scope.task)
        };

        $scope.addCommentToTask = function(newComment, task) {
            var u = window.CurrentUser;
            newComment.task_id = task.id;
            newComment.user_id = u.id;

            var comment = Comment.save(newComment);

            $scope.task.comments.push(comment);
        }
    }
];