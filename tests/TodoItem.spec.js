import { mount } from "@vue/test-utils";
import TodoItem from "../src/components/TodoItem.vue";

describe("TodoItem.vue", () => {
  it("toggles done status when clicked", async () => {
    const todo = { content: "Sample Task", done: false };
    const wrapper = mount(TodoItem, { props: { todo } });
    await wrapper.find("span").trigger("click");
    expect(wrapper.props("todo").done).toBe(true);
  });

  it("emits remove-todo event when delete is clicked", async () => {
    const todo = { content: "Task to Remove" };
    const wrapper = mount(TodoItem, { props: { todo } });
    wrapper.find(".material-icons.dlt").trigger("click");
    expect(wrapper.emitted()["remove-todo"]).toBeTruthy();
  });
});
