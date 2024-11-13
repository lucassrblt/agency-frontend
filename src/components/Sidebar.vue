<script setup lang="ts">
import { Menu } from 'lucide-vue-next';
import { ref } from 'vue'

const navOpen = ref(true)


function toggleNav(){
  navOpen.value = !navOpen.value
}

</script>

<template>
<section :class="['h-full w-64 bg-gray-50 relative nav border-r-[1px] border-slate-200 flex ', {'nav-close': !navOpen}]" id="nav" ref="nav">
  <div class="absolute w-[36px] h-[36px] bg-white rounded-lg top-3 left-[calc(100%+10px)] border-[1px] border-gray-200 shadow-sm flex items-center cursor-pointer z-20 justify-center"
  @click="toggleNav"
  >
    <Menu/>
  </div>
</section>
</template>

<style scoped>

</style>