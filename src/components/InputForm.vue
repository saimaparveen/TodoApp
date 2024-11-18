<script>
import { ref } from "vue";

export default {
  name: "InputForm",
  emits: ["add-todo"],
  setup(_, { emit }) {
    const inputContent = ref("");
    const inputCategory = ref(null);
    const errorMsg = ref("");

    const handleAddTodo = () => {
      if (inputContent.value.trim() && inputCategory.value) {
        emit("add-todo", {
          content: inputContent.value,
          category: inputCategory.value,
          done: false,
          editable: false,
          createdAt: Date.now(),
        });
        inputContent.value = "";
        inputCategory.value = null;
        errorMsg.value = "";
      } else {
        errorMsg.value = "Content or category cannot be empty";
      }
    };

    return {
      inputContent,
      inputCategory,
      errorMsg,
      handleAddTodo,
    };
  },
};
</script>

<template>
  <section class="create-todo">
    <h3>CREATE A TO-DO</h3>
    <h4>What's on your to-do list?</h4>
    <input
      type="text"
      name="content"
      id="content"
      placeholder="Make a video"
      v-model="inputContent"
    />
    <h4>Pick a category</h4>
    <div class="options">
      <span class="option cat-0">
        <input
          type="radio"
          value="0"
          name="category"
          id="cat-critical"
          v-model="inputCategory"
        />
        <label for="cat-critical">Critical</label>
      </span>
      <span class="option cat-1">
        <input
          type="radio"
          value="1"
          name="category"
          id="cat-moderate"
          v-model="inputCategory"
        />
        <label for="cat-moderate">Moderate</label>
      </span>
      <span class="option cat-2">
        <input
          type="radio"
          value="2"
          name="category"
          id="cat-optional"
          v-model="inputCategory"
        />
        <label for="cat-optional">Optional</label>
      </span>
    </div>
    <h3 v-if="errorMsg !== ''" class="errorMsg">{{ errorMsg }}</h3>
    <button @click="handleAddTodo" class="add-to-do-btn">Add To-Do</button>
  </section>
</template>
