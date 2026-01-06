<script setup>
import { ref, onMounted, onUnmounted } from "vue"

const props = defineProps({
  /** 通知訊息的內容 */
  message: {
    type: String,
    required: true
  },
  /**
   * 通知的類型
   * - info: 一般資訊（藍色）
   * - success: 成功訊息（綠色）
   * - warning: 警告訊息（黃色）
   * - error: 錯誤訊息（紅色）
   */
  type: {
    type: String,
    default: "info",
    validator: (value) => ["info", "success", "warning", "error"].includes(value)
  },
  /** 是否顯示關閉按鈕 */
  closable: {
    type: Boolean,
    default: true
  },
  /** 自動關閉的毫秒數，設為 0 則不自動關閉 */
  duration: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(["close"])

const visible = ref(true)
let timer = null

const typeClasses = {
  info: "bg-blue-50 border-blue-500 text-blue-700",
  success: "bg-green-50 border-green-500 text-green-700",
  warning: "bg-yellow-50 border-yellow-500 text-yellow-700",
  error: "bg-red-50 border-red-500 text-red-700"
}

const iconMap = {
  info: "ℹ️",
  success: "✓",
  warning: "⚠",
  error: "✕"
}

function close() {
  visible.value = false
  emit("close")
}

onMounted(() => {
  if (props.duration > 0) {
    timer = setTimeout(close, props.duration)
  }
})

onUnmounted(() => {
  if (timer) {
    clearTimeout(timer)
  }
})
</script>

<template>
  <div
    v-if="visible"
    class="flex items-center gap-3 p-4 border-l-4 rounded"
    :class="typeClasses[type]"
    role="alert"
  >
    <span class="text-lg">{{ iconMap[type] }}</span>
    <span class="flex-1">{{ message }}</span>
    <button
      v-if="closable"
      @click="close"
      class="text-current opacity-50 hover:opacity-100"
      aria-label="關閉通知"
    >
      ✕
    </button>
  </div>
</template>
