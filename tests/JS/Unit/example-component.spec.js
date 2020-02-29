import { mount } from "@vue/test-utils";
import Example from "@/components/ExampleComponent";

describe("Example", () => {
    test("is a Vue instance", () => {
        const wrapper = mount(Example);
        expect(wrapper.isVueInstance()).toBeTruthy();
    });
});
