import { mount } from "@vue/test-utils";
import TodoApp from "../src/TodoApp.vue";

describe("TodoApp.vue", () => {
  it("adds a new to-do", async () => {
    const wrapper = mount(TodoApp);
    const todo = { content: "New Task", category: 1, createdAt: new Date() };
    wrapper.vm.addTodo(todo);
    expect(wrapper.vm.todos).toContainEqual(todo);
  });

  // it("removes a to-do", async () => {
  //   const wrapper = mount(TodoApp);
  //   const todo = {
  //     content: "Task to Remove",
  //     category: 1,
  //     createdAt: new Date(),
  //   };
  //   wrapper.vm.todos = [todo];
  //   wrapper.vm.removeTodo(todo);
  //   expect(wrapper.vm.todos).not.toContainEqual(todo);
  // });

  it("clears all to-dos", async () => {
    const wrapper = mount(TodoApp);
    wrapper.vm.todos = [{ content: "Task 1" }, { content: "Task 2" }];
    wrapper.vm.clearAllTodos();
    expect(wrapper.vm.todos.length).toBe(0);
  });

  it("sorts to-dos by created date", () => {
    const wrapper = mount(TodoApp);
    const todos = [
      { content: "Old Task", createdAt: "2024-01-01" },
      { content: "New Task", createdAt: "2024-02-01" },
    ];
    wrapper.vm.todos = todos;
    wrapper.vm.sortCriteria = "createdAt";
    expect(wrapper.vm.sortedTodos[0].content).toBe("Old Task");
  });
});
