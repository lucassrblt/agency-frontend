<script setup lang="ts">
import TopBar from "../components/TopBar.vue";
import AnnoncesWrapper from "../components/AnnoncesWrapper.vue";
import { onMounted, ref, watch } from "vue";
import {useAdsStore} from "../store/adsStore.ts";

const store = useAdsStore()
const fetchAdds = async () => {
  store.fetchAds();
}

const adds = ref(store.ads);

onMounted(async () => {
  await fetchAdds();
});

watch(() => store.typeFilter, fetchAdds);
watch(() => store.cityFilter, fetchAdds);
watch(() => store.squareFilter, fetchAdds);
watch(() => store.priceFilter, fetchAdds);
</script>

<template>
  <section class="flex w-full h-full flex-col px-16 py-12">
    <top-bar />
    <annonces-wrapper :annonces="adds" />
    <div v-if="adds.length === 0">Chargement en cours...</div>

  </section>
</template>

<style scoped>
</style>