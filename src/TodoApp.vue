<template>
  <main class="app">
    <section class="greeting">
      <h2 class="title">
        What's up,
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          v-model="name"
        />
      </h2>
    </section>
    <InputForm @add-todo="addTodo" />
    <section class="filters">
      <label for="sortCriteria">Sort by:</label>
      <select v-model="sortCriteria">
        <option value="createdAt">Creation Date</option>
        <option value="category">Category</option>
      </select>
      <button @click="clearAllTodos" class="clear-all-todos">
        Clear All Todos
      </button>
    </section>
    <TodoList
      :todos="sortedTodos"
      @remove-todo="removeTodo"
      @edit-todo="editTodo"
      @update-todo="updateTodo"
    />
  </main>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import InputForm from "./components/InputForm.vue";
import TodoList from "./components/TodoList.vue";
import { useLocalStorage } from "./useLocalStorage";

export default {
  name: "TodoApp",
  components: {
    InputForm,
    TodoList,
  },
  setup() {
    const todos = useLocalStorage("todos", [], "json");
    const name = useLocalStorage("name", "", "string");
    const sortCriteria = ref("createdAt");
    const editingTodo = ref(null);

    const sortedTodos = computed(() => {
      return [...todos.value].sort((a, b) => {
        if (sortCriteria.value === "createdAt") {
          return new Date(a.createdAt) - new Date(b.createdAt);
        }
        if (sortCriteria.value === "category") {
          return a.category - b.category;
        }
        return 0;
      });
    });

    const addTodo = (todo) => {
      todos.value.push(todo);
    };

    const removeTodo = (todo) => {
      todos.value = todos.value.filter((t) => t !== todo);
    };

    const editTodo = (todo) => {
      editingTodo.value = todo;
    };

    const updateTodo = (updatedTodo) => {
      const index = todos.value.findIndex(
        (t) => t.createdAt === updatedTodo.createdAt
      );
      if (index !== -1) {
        todos.value[index] = updatedTodo;
      }
      editingTodo.value = null;
    };

    const clearAllTodos = () => {
      todos.value = [];
    };

    onMounted(() => {
      name.value = localStorage.getItem("name") || "";
      todos.value = JSON.parse(localStorage.getItem("todos")) || [];
    });

    return {
      todos,
      name,
      sortCriteria,
      sortedTodos,
      addTodo,
      removeTodo,
      editTodo,
      updateTodo,
      clearAllTodos,
      editingTodo,
    };
  },
};
</script>
