<script>
import { ref } from "vue";

export default {
  name: "TodoItem",
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  emits: ["remove-todo", "edit-todo", "update-todo"],
  setup(props, { emit }) {
    const isEditing = ref(false);
    const editedContent = ref(props.todo.content);

    const startEditing = () => {
      isEditing.value = true;
      editedContent.value = props.todo.content;
    };

    const saveEdit = () => {
      emit("update-todo", { ...props.todo, content: editedContent.value });
      isEditing.value = false;
    };

    const cancelEdit = () => {
      isEditing.value = false;
      editedContent.value = props.todo.content;
    };

    return {
      isEditing,
      editedContent,
      startEditing,
      saveEdit,
      cancelEdit,
    };
  },
};
</script>

<template>
  <li :class="`todo-item cat-${todo.category} ${todo.done && 'done'}`">
    <div v-if="!isEditing">
      <span @click="todo.done = !todo.done">{{ todo.content }}</span>
      <div class="actions">
        <span @click="startEditing" class="material-icons" v-if="!todo.done"
          >edit</span
        >
        <span @click="$emit('remove-todo', todo)" class="material-icons dlt"
          >delete</span
        >
      </div>
    </div>
    <div v-else>
      <input v-model="editedContent" class="editContent" />
      <div class="actions">
        <span @click="saveEdit" class="material-icons">save</span>
        <span @click="cancelEdit" class="material-icons">cancel</span>
      </div>
    </div>
  </li>
</template>
