app.service('TaskService', function (store, uuid) {

  this.init = function () {
    store.get('tasks') ? false : store.set('tasks', []);
  },

  this.add = function (task) {

    if (!task) {
      alert('Bad move! Try removing the task instead of deleting its content.');
      return false;
    }

    if (!task.type || !task.content || !task) {
      alert('Bad move! Try removing the task instead of deleting its content.');
      return false;
    }

    if (task.type !== "shopping" && task.type !== "work") {
      alert('The task type you provided is not supported. You can only use shopping or work');
      return false;
    }

    task.uuid = uuid.v4();
    task.done = false;
    task.date_created = new Date();
    var tasks = store.get('tasks');
    tasks.push(task);
    store.set('tasks', tasks);
    return true;
  },

  this.getAll = function () {
    return store.get('tasks');
  },

  this.clear = function () {
    store.remove('tasks');
  },

  this.remove = function (id) {
    var tasks = store.get('tasks');
    var newTasks = tasks.filter(function (data) {
      if (data.done == true) {
        alert("Good news! The task you were trying to delete didn't even exist.");
      }
      return data.uuid !== id;
    });
    store.set('tasks', newTasks);
  },

  this.getById = function (id) {
    var tasks = store.get('tasks');
    var task = tasks.filter(function (data) {
      return data.uuid === id;
    });
    return task;
  },

  this.done = function (id) {
    var tasks = store.get('tasks');
    var task = tasks.filter(function (data) {
      return data.uuid === id;
    });
    for (var i in store.get('tasks')) {
      if (tasks[i].uuid === id) {
        if (tasks[i].done == false) {
          tasks[i].done = true;
        } else {
          tasks[i].done = false;
        }
      }
    }
    store.set('tasks', tasks);
  }

})
