<script setup lang="ts">
import AdminLayout from "./layouts/AdminLayout.vue";
import {computed} from "vue";
import {useRoute} from 'vue-router'
import Toast from 'primevue/toast';


const route = useRoute()

const layout = computed(() => {
  return (route.meta.layout || 'default') + 'Layout'
})
</script>

<template>
  <Toast/>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>

<style scoped>

</style>
