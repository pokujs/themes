<template>
  <div class="Hi">
    <h1>Selected: {{ selected }}</h1>
    <ul>
      <li
        v-for="(item, index) in items"
        :key="index"
        @click="selectItem(item)"
      >
        {{ item }}
      </li>
      <li v-if="items.length === 0">No items found</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return { items: ["Alice", "Bob", "Charlie"], selected: "None" };
  },
  methods: {
    selectItem(item) {
      this.selected = item;
    },
  },
};
</script>
