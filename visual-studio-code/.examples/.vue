<template>
  <div class="todo-app">
    <h1>{{ title }}</h1>
    <input
      v-model="newTodo"
      @keyup.enter="addTodo"
      placeholder="Add a new todo"
    />
    <ul>
      <li
        v-for="todo in filteredTodos"
        :key="todo.id"
        :class="{ completed: todo.completed }"
      >
        <input type="checkbox" v-model="todo.completed" />
        <span>{{ todo.text }}</span>
        <button @click="removeTodo(todo)">X</button>
      </li>
    </ul>
    <div class="filters">
      <button @click="filter = 'all'">All</button>
      <button @click="filter = 'active'">Active</button>
      <button @click="filter = 'completed'">Completed</button>
    </div>
    <p>{{ remainingTodos }} items left</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Vue.js Todo App',
      newTodo: '',
      filter: 'all',
      todos: [
        { id: 1, text: 'Learn Vue.js', completed: false },
        { id: 2, text: 'Build a Todo App', completed: true },
        { id: 3, text: 'Master Vue.js', completed: false },
      ],
    };
  },
  computed: {
    filteredTodos() {
      if (this.filter === 'active') {
        return this.todos.filter((todo) => !todo.completed);
      }
      if (this.filter === 'completed') {
        return this.todos.filter((todo) => todo.completed);
      }
      return this.todos;
    },
    remainingTodos() {
      return this.todos.filter((todo) => !todo.completed).length;
    },
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim().length === 0) {
        return;
      }
      this.todos.push({
        id: this.todos.length + 1,
        text: this.newTodo.trim(),
        completed: false,
      });
      this.newTodo = '';
    },
    removeTodo(todo) {
      const index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.todo-app {
  max-width: 400px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}
.completed span {
  text-decoration: line-through;
  color: #999;
}
.filters {
  margin-top: 20px;
}
button {
  margin-right: 10px;
}
</style>
