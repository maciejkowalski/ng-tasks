this.TasksCtrl = [
    "$scope", "$routeParams", "Task", "Comment", "Attachment", "FileUploader",
    function ($scope, $routeParams, Task, Comment, Attachment, FileUploader) {
        var csrf_token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

        $scope.uploader = new FileUploader({
            url: "/attachments",
            autoUpload: true,
            headers: {
                'X-CSRF-TOKEN': csrf_token // X-CSRF-TOKEN is used for Ruby on Rails Tokens
            },
            removeAfterUpload: true
        });
        var getTask = function () {
            $scope.task = Task.get({
                id: $routeParams.id,
                list_id: $routeParams.list_id
            }, function (task) {
                if (task.due_date) {
                  task.due_date = moment(task.due_date);
                };
            });
        };
        getTask();

        $scope.onTimeSet = function (newDate, oldDate) {
            console.log(newDate, oldDate);
            $scope.task.due_date = newDate
            Task.update($scope.task)
        };

        $scope.uploader.onBeforeUploadItem = function (item) {
            var u = window.CurrentUser;
            item.formData.push({task_id: $scope.task.id, user_id: u.id})
        };

        $scope.uploader.onCompleteItem = function (fileItem, response, status, headers) {
            $scope.task.attachments.push(response);
            console.log(fileItem, response, status, headers);
        };


        $scope.updateTask = function () {
            console.log("updateTask $scope.task", $scope.task)
            Task.update($scope.task)
        };

        $scope.addCommentToTask = function (newComment, task) {
            var u = window.CurrentUser;
            newComment.task_id = task.id;
            newComment.user_id = u.id;

            var comment = Comment.save(newComment);

            $scope.task.comments.push(comment);
            return $scope.newComment = {};
        };

        $scope.destroyAttachment = function (file) {
            Attachment.delete({id: file.id});
            getTask();
        };
    }
];