<script setup>
defineProps({
  label: String,
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
