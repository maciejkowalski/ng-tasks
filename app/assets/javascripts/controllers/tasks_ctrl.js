this.TasksCtrl = [
    "$scope", "$routeParams", "Task", "Comment", "FileUploader", function($scope, $routeParams, Task, Comment, FileUploader) {
        var csrf_token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

        $scope.uploader = new FileUploader({
            url: "/upload",
            autoUpload: true,
            headers : {
                'X-CSRF-TOKEN': csrf_token // X-CSRF-TOKEN is used for Ruby on Rails Tokens
            }
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