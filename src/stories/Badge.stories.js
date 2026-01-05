import Badge from "./Badge.vue"

const meta = {
  title: "Components/Badge",
  component: Badge
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

export default meta
export { Default, Primary, Success, Warning, Danger }
