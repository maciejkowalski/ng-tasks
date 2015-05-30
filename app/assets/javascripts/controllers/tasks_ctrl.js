this.TasksCtrl = [
    "$scope", "$routeParams", "Task", "Comment", "FileUploader", function($scope, $routeParams, Task, Comment, FileUploader) {
        $scope.uploader = new FileUploader({
            url: "/upload",
            autoUpload: true
        });
        $scope.task = Task.get({
            id: $routeParams.id,
            list_id: $routeParams.list_id
        }, function (task) { });
        console.log('$scope.uploader', $scope.uploader);


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
            return $scope.newComment = {};
        }
    }
];