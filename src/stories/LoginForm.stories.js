import { within, userEvent, expect, fn } from "storybook/test"
import LoginForm from "./LoginForm.vue"

const meta = {
  title: "Components/LoginForm",
  component: LoginForm,
  tags: ["autodocs"],
  args: {
    onSubmit: fn()
  }
}

const Default = {}

const SuccessfulSubmit = {
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)

    await userEvent.type(canvas.getByLabelText("電子郵件"), "test@example.com")
    await userEvent.type(canvas.getByLabelText("密碼"), "password123")
    await userEvent.click(canvas.getByRole("button", { name: /登入/i }))

    await expect(args.onSubmit).toHaveBeenCalledWith({
      email: "test@example.com",
      password: "password123"
    })
  }
}

const ValidationErrorEmpty = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await userEvent.click(canvas.getByRole("button", { name: /登入/i }))

    await expect(canvas.getByText("請輸入電子郵件")).toBeInTheDocument()
    await expect(canvas.getByText("請輸入密碼")).toBeInTheDocument()
  }
}

export default meta
export { Default, SuccessfulSubmit, ValidationErrorEmpty }
