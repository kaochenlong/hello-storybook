<script setup>
import { useCounterStore } from "../stores/counter"

const store = useCounterStore()
</script>

<template>
  <div class="flex items-center gap-4">
    <button
      class="px-4 py-2 text-xl bg-gray-200 rounded hover:bg-gray-300"
      @click="store.decrement"
    >
      -
    </button>
    <span class="text-2xl font-bold w-12 text-center">{{ store.count }}</span>
    <button
      class="px-4 py-2 text-xl bg-gray-200 rounded hover:bg-gray-300"
      @click="store.increment"
    >
      +
    </button>
  </div>
</template>
