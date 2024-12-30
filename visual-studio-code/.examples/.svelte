<script>
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';

  let todos = [];
  let newTodo = '';
  let filter = 'all';

  onMount(async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
    todos = await res.json();
  });

  function addTodo() {
    if (newTodo.trim()) {
      todos = [...todos, { id: Date.now(), title: newTodo, completed: false }];
      newTodo = '';
    }
  }

  function toggleTodo(id) {
    todos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  }

  function removeTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
  }

  $: filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });
</script>

<main>
  <h1>Todo App</h1>

  <form on:submit|preventDefault={addTodo}>
    <input bind:value={newTodo} placeholder="Add a new todo">
    <button type="submit">Add</button>
  </form>

  <div>
    <button class:active={filter === 'all'} on:click={() => filter = 'all'}>All</button>
    <button class:active={filter === 'active'} on:click={() => filter = 'active'}>Active</button>
    <button class:active={filter === 'completed'} on:click={() => filter = 'completed'}>Completed</button>
  </div>

  <ul>
    {#each filteredTodos as todo (todo.id)}
      <li in:fly="{{ y: 20, duration: 300 }}" out:fade="{{ duration: 300 }}">
        <input type="checkbox" checked={todo.completed} on:change={() => toggleTodo(todo.id)}>
        <span class:completed={todo.completed}>{todo.title}</span>
        <button on:click={() => removeTodo(todo.id)}>Remove</button>
      </li>
    {:else}
      <li>No todos found</li>
    {/each}
  </ul>
</main>

<style>
  main {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
  }

  form {
    display: flex;
    margin-bottom: 20px;
  }

  input[type="text"] {
    flex-grow: 1;
    padding: 5px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  .completed {
    text-decoration: line-through;
    color: #888;
  }

  button {
    margin-left: 10px;
  }

  button.active {
    background-color: #007bff;
    color: white;
  }
</style>
