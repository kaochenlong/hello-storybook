import "../src/tailwind.css"
import { setup } from "@storybook/vue3"
import { createPinia } from "pinia"

const pinia = createPinia()

setup((app) => {
  app.use(pinia)
})

/** @type { import('@storybook/vue3-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo"
    }
  },
};

export default preview;