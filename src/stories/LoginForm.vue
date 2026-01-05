<script setup>
import { ref } from "vue"

const emit = defineEmits(["submit"])

const email = ref("")
const password = ref("")
const errors = ref({})

function validate() {
  errors.value = {}
  if (!email.value) {
    errors.value.email = "請輸入電子郵件"
  }
  if (!password.value) {
    errors.value.password = "請輸入密碼"
  }
  return Object.keys(errors.value).length === 0
}

function handleSubmit() {
  if (validate()) {
    emit("submit", {
      email: email.value,
      password: password.value
    })
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="space-y-4 w-80">
    <div>
      <label for="email" class="block text-sm font-medium text-gray-700">
        電子郵件
      </label>
      <input
        id="email"
        v-model="email"
        type="email"
        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      />
      <p v-if="errors.email" class="mt-1 text-sm text-red-600">
        {{ errors.email }}
      </p>
    </div>

    <div>
      <label for="password" class="block text-sm font-medium text-gray-700">
        密碼
      </label>
      <input
        id="password"
        v-model="password"
        type="password"
        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      />
      <p v-if="errors.password" class="mt-1 text-sm text-red-600">
        {{ errors.password }}
      </p>
    </div>

    <button
      type="submit"
      class="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      登入
    </button>
  </form>
</template>
