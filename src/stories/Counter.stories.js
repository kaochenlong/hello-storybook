import { within, userEvent, expect } from "storybook/test"
import Counter from "./Counter.vue"

const meta = {
  title: "Components/Counter",
  component: Counter,
  tags: ["autodocs"]
}

const Default = {}

const WithInteraction = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const incrementButton = canvas.getByRole("button", { name: "+" })

    await userEvent.click(incrementButton)
    await userEvent.click(incrementButton)
    await userEvent.click(incrementButton)

    await expect(canvas.getByText("3")).toBeInTheDocument()
  }
}

export default meta
export { Default, WithInteraction }
