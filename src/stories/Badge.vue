<script setup>
defineProps({
  /** 標籤上顯示的文字 */
  label: String,
  /**
   * 標籤的樣式變體
   * - default: 預設灰色
   * - primary: 主要藍色
   * - success: 成功綠色
   * - warning: 警告黃色
   * - danger: 危險紅色
   */
  variant: {
    type: String,
    default: "default"
  }
})

const variantClasses = {
  default: "bg-gray-200 text-gray-700",
  primary: "bg-blue-500 text-white",
  success: "bg-green-500 text-white",
  warning: "bg-yellow-500 text-white",
  danger: "bg-red-500 text-white"
}
</script>

<template>
  <span
    class="inline-block px-2 py-1 text-sm rounded"
    :class="variantClasses[variant]"
  >
    {{ label }}
  </span>
</template>
