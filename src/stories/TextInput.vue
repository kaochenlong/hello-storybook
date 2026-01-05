<script setup>
defineProps({
  /** 輸入框的值 */
  modelValue: {
    type: String,
    default: ""
  },
  /** placeholder 文字 */
  placeholder: {
    type: String,
    default: ""
  },
  /** 是否禁用 */
  disabled: {
    type: Boolean,
    default: false
  },
  /** 錯誤訊息 */
  error: {
    type: String,
    default: ""
  }
})

const emit = defineEmits(["update:modelValue"])

function handleInput(event) {
  emit("update:modelValue", event.target.value)
}
</script>

<template>
  <div class="text-input">
    <input
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :class="[
        'block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none',
        error
          ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
          : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
      ]"
      @input="handleInput"
    />
    <span v-if="error" class="mt-1 text-sm text-red-600">{{ error }}</span>
  </div>
</template>
