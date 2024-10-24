<script setup lang="ts">
import TopBar from "../components/TopBar.vue";
import AnnoncesWrapper from "../components/AnnoncesWrapper.vue";
import {onMounted, watchEffect} from "vue";
import {useAdsStore} from "../store/adsStore.ts";
import { storeToRefs } from 'pinia';


const store = useAdsStore()
const { ads, isLoading } = storeToRefs(store);



onMounted(async () => {
  await store.fetchAds();
  await store.fetchCities()
});

watchEffect (() => {
  store.fetchAds()
})
</script>

<template>
  <section class="flex w-full h-full flex-col px-16 py-12 overflow-y-visible bg-[#fafafa]">
    <top-bar/>
    <annonces-wrapper :ads="ads" />
    <div v-if="isLoading">Chargement en cours...</div>

  </section>
</template>

<style scoped>
</style>