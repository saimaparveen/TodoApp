import { mount } from "@vue/test-utils";
import TodoList from "../src/components/TodoList.vue";
import TodoItem from "../src/components/TodoItem.vue";

describe("TodoList.vue", () => {
  it("renders the correct number of TodoItem components", () => {
    const todos = [
      { content: "Task 1", createdAt: "2024-01-01" },
      { content: "Task 2", createdAt: "2024-02-01" },
    ];
    const wrapper = mount(TodoList, { props: { todos } });
    expect(wrapper.findAllComponents(TodoItem).length).toBe(2);
  });

  it("emits remove-todo event when a TodoItem emits remove-todo", () => {
    const todos = [{ content: "Task 1" }];
    const wrapper = mount(TodoList, { props: { todos } });
    wrapper.findComponent(TodoItem).vm.$emit("remove-todo", todos[0]);
    expect(wrapper.emitted()["remove-todo"]).toBeTruthy();
  });
});
