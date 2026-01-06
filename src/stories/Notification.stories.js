import Notification from "./Notification.vue"

const meta = {
  title: "Components/Notification",
  component: Notification,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["info", "success", "warning", "error"]
    },
    duration: {
      control: "number"
    }
  }
}

const Default = {
  args: {
    message: "這是一則通知訊息"
  }
}

const Info = {
  args: {
    message: "這是一則資訊通知",
    type: "info"
  }
}

const Success = {
  args: {
    message: "操作成功完成！",
    type: "success"
  }
}

const Warning = {
  args: {
    message: "請注意，這個操作無法復原",
    type: "warning"
  }
}

const Error = {
  args: {
    message: "發生錯誤，請稍後再試",
    type: "error"
  }
}

const NotClosable = {
  args: {
    message: "這則通知沒有關閉按鈕",
    type: "info",
    closable: false
  }
}

const AutoClose = {
  args: {
    message: "這則通知會在 3 秒後自動關閉",
    type: "success",
    duration: 3000
  }
}

export default meta
export { Default, Info, Success, Warning, Error, NotClosable, AutoClose }
