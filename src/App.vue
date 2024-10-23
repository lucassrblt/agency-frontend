<script setup lang="ts">
import AdminLayout from "./layouts/AdminLayout.vue";
import {computed} from "vue";
import { useRoute } from 'vue-router'
const route = useRoute()

const layout = computed(() => {
  return (route.meta.layout || 'default') + 'Layout'
})
</script>

<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>

<style scoped>

</style>
