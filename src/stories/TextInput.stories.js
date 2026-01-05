import { within, userEvent, expect } from "storybook/test"
import TextInput from "./TextInput.vue"

const meta = {
  title: "Form/TextInput",
  component: TextInput,
  tags: ["autodocs"]
}

const Default = {
  args: {
    placeholder: "請輸入文字"
  }
}

const WithValue = {
  args: {
    modelValue: "已輸入的內容"
  }
}

const Disabled = {
  args: {
    modelValue: "無法編輯",
    disabled: true
  }
}

const WithError = {
  args: {
    modelValue: "invalid",
    error: "格式不正確"
  }
}

const InteractionTest = {
  args: {
    placeholder: "請輸入"
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByPlaceholderText("請輸入")

    await userEvent.type(input, "Hello World")

    await expect(input).toHaveValue("Hello World")
  }
}

export default meta
export { Default, WithValue, Disabled, WithError, InteractionTest }
