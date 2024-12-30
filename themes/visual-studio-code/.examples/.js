class TodoList {
  constructor() {
    this.todos = [];
  }

  addTodo(title) {
    const todo = {
      id: this.todos.length + 1,
      title,
      completed: false,
      createdAt: new Date(),
    };
    this.todos.push(todo);
    return todo;
  }

  toggleTodo(id) {
    const todo = this.todos.find((todo) => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
    return todo;
  }

  removeTodo(id) {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      return this.todos.splice(index, 1)[0];
    }
    return null;
  }

  getTodos() {
    return this.todos;
  }

  getCompletedTodos() {
    return this.todos.filter((todo) => todo.completed);
  }

  getPendingTodos() {
    return this.todos.filter((todo) => !todo.completed);
  }
}

const todoList = new TodoList();

todoList.addTodo('Learn JavaScript');
todoList.addTodo('Build a todo app');
todoList.addTodo('Master async/await');

console.log(todoList.getTodos());
todoList.toggleTodo(2);
console.log(todoList.getCompletedTodos());
todoList.removeTodo(3);
console.log(todoList.getPendingTodos());
