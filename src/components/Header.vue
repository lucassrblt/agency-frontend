<script setup lang="ts">
import Button from 'primevue/button';
import {LogOut} from "lucide-vue-next";

const props = defineProps({
  pageName: String
});
</script>

<template>
<header class="bg-white w-full min-h-16 border-b-[1px] border-gray-200 flex items-center px-20 justify-between">
  <div>
    <p>
      {{props.pageName}}
    </p>
  </div>
  <LogOut />
</header>
</template>

<style scoped>

</style>