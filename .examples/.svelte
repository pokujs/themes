<script>
  let items = ["Alice", "Bob", "Charlie"];
  let selected = "None";

  const selectItem = (item) => {
    selected = item;
  };

  $: console.log(`Selected item is: ${selected}`);
</script>

<h1>Selected: {selected}</h1>

<ul>
  {#each items as item}
    <button on:click={() => selectItem(item)}>{item}</button>
  {:else}
    <li class="ops">No items found</li>
  {/each}
</ul>
