import Badge from "./Badge.vue"

const meta = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "primary", "success", "warning", "danger"]
    }
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div style="padding: 20px; background: #f5f5f5;"><story /></div>'
    })
  ]
}

const Default = {
  args: {
    label: "預設"
  }
}

const Primary = {
  args: {
    label: "主要",
    variant: "primary"
  }
}

const Success = {
  args: {
    label: "成功",
    variant: "success"
  }
}

const Warning = {
  args: {
    label: "警告",
    variant: "warning"
  }
}

const Danger = {
  args: {
    label: "危險",
    variant: "danger"
  }
}

const BadgeGroup = {
  render: () => ({
    components: { Badge },
    template: `
      <div style="display: flex; gap: 8px;">
        <Badge label="Vue" variant="success" />
        <Badge label="React" variant="primary" />
        <Badge label="Angular" variant="danger" />
      </div>
    `
  })
}

export default meta
export { Default, Primary, Success, Warning, Danger, BadgeGroup }
