<script lang="ts" setup>
const props = defineProps({
  titulo: String,
  descricao: String,
});
</script>

<template>
  <div class="flex flex-col">
    <h2 class="font-bold text-xl">{{ props.titulo }}</h2>
    <p class="text-sm text-gray-500">{{ props.descricao }}</p>
  </div>
</template>
