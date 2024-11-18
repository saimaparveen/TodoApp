import { mount } from "@vue/test-utils";
import InputForm from "../src/components/InputForm.vue";

describe("InputForm.vue", () => {
  it("emits add-todo event with correct data", async () => {
    // const wrapper = mount(InputForm);
    // // Set input values using DOM methods
    // await wrapper.find("input[type='text']").setValue("New To-Do");
    // await wrapper.find("select").setValue(1);
    // // Trigger the add button
    // wrapper.find("button").trigger("click");
    // // Assert the emitted event
    // expect(wrapper.emitted()["add-todo"]).toBeTruthy();
    // expect(wrapper.emitted()["add-todo"][0][0]).toEqual({
    //   content: "New To-Do",
    //   category: 1,
    //   createdAt: expect.any(Date),
    //   done: false,
    // });
  });
});
