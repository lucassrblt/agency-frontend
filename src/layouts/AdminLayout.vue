<script setup lang="ts">
import Sidebar from "../components/Sidebar.vue";
import Header from "../components/Header.vue";
import {useAdsStore} from "../store/adsStore.ts";
import {onMounted} from "vue";

const store = useAdsStore();
const props = defineProps({
  pageName: String
});

onMounted(async () => {
  await store.fetchAds();
})


</script>

<template>
  <main class="flex w-screen h-screen">
    <Sidebar/>
    <section class="h-full w-full flex flex-col">
      <Header :pageName="props.pageName"/>
      <router-view></router-view>
    </section>
  </main>
</template>

<style scoped>

</style>