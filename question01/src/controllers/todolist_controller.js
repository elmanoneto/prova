app.controller('TodolistController', function (TaskService, $state, $scope) {

  var vm = this;

  TaskService.init();

  vm.tasks = TaskService.getAll();

  $scope.$watch($state.current.name, function (newVal, oldVal) {
    if ($state.current.name == 'todo.details') {
      vm.task = TaskService.getById($state.params.id);
    }
  })

  vm.add = function (data) {
    TaskService.add(data) ? $state.go('todo.list') : false;
  }

  vm.remove = function (id, index) {
    TaskService.remove(id);
    vm.tasks.splice(index, 1);
  }

  vm.done = function (id) {
    TaskService.done(id);
  }

  vm.details = function (id) {
    $state.go('todo.details', {id: id});
  }

  vm.back = function () {
    $state.go('todo');
  }

})
