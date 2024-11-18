<script>
import TodoItem from "./TodoItem.vue";

export default {
  name: "TodoList",
  components: {
    TodoItem,
  },
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
  emits: ["remove-todo", "edit-todo", "update-todo"],
  methods: {
    handleRemoveTodo(event) {
      this.$emit("remove-todo", event);
    },
    handleEditTodo(event) {
      this.$emit("edit-todo", event);
    },
    handleUpdateTodo(event) {
      this.$emit("update-todo", event);
    },
  },
};
</script>

<template>
  <section class="todo-list">
    <h3 v-if="todos.length === 0">No To-do list to display</h3>
    <h3 v-else>TO-DO LIST</h3>
    <ul class="list" id="todo-list">
      <TodoItem
        v-for="todo in todos"
        :key="todo.createdAt"
        :todo="todo"
        @remove-todo="handleRemoveTodo"
        @edit-todo="handleEditTodo"
        @update-todo="handleUpdateTodo"
      />
    </ul>
  </section>
</template>
