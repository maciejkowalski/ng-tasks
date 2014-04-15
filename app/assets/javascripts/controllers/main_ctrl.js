this.MainCtrl = [
  "$scope", "List", "Task", function($scope, List, Task) {
    $scope.lists = List.query();

    $scope.addList = function() {
      var list = List.save($scope.newList);
      $scope.lists.push(list);
      return $scope.newList = {};
    }

    $scope.updateList = function(list) {
      List.update({id: list.id, list: {name: list.name}});
    }

    $scope.deleteList = function($index) {
      if (confirm("Czy jesteś pewien że chcesz usunąć tą listę?")) {
        $scope.lists[$index].$delete();
        $scope.lists.splice($index, 1);
      }
    }

    $scope.addTaskToList = function(newTask, list) {
      newTask.list_id = list.id;
      var task = Task.save(newTask);
      list.tasks.push(task);
      newTask = {};
    }

    $scope.deleteTaskFromList = function($index, task, list) {
      if (confirm("Czy jesteś pewien że chcesz usunąć ten task?")) {
        list.tasks.splice($index, 1);
        Task.delete({list_id: list.id, id: task.id});
        // http://draptik.github.io/blog/2013/07/28/restful-crud-with-angularjs/
      }
    }

    $scope.updateTaskInList = function(task) {
      Task.update(task);
    }

    $scope.clickList = function() {
      console.log('click list')
    }
  }
]

