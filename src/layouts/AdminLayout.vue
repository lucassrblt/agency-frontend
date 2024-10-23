<script setup lang="ts">
import Sidebar from "../components/Sidebar.vue";
</script>

<template>
<main class="flex w-screen h-screen">
    <Sidebar />
  <section class="h-full w-full">
    <router-view></router-view>
  </section>
</main>
</template>

<style scoped>

</style>