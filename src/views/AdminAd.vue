<script setup lang="ts">

import AdForm from "../components/AdForm.vue";
import Button from 'primevue/button';
import {onMounted, ref, watch} from "vue";
import TechnicalSheetForm from "../components/TechnicalSheetForm.vue";
import ImageForm from "../components/ImageForm.vue";
import {useRoute} from "vue-router";
import {useAdsStore} from "../store/adsStore.ts";


const pageNumber = ref(1)
const route = useRoute()
const store = useAdsStore();
const adId = ref<string | string[] | undefined>(route.params.id)

const fetchAdDetails = async (id: string) => {
  await store.MUTATE_SELECT_AD(id)
}

onMounted(() => {
  if (adId.value && typeof adId.value === 'string') {
    fetchAdDetails(adId.value);
  }
});

watch(() => route.params, (newParams) => {
  const newValue = newParams.id;
  if (newValue && typeof newValue === 'string') {
    fetchAdDetails(newValue);
  }
});
</script>

<template>
  <section class="w-full h-full px-12 py-6 flex flex-col gap-10">
    <div class="w-full flex justify-between">
      <h1 v-if="adId" class="font-poppins font-medium text-lg text-slate-950">
        {{ `Modification de l'annonce ${adId}` }}</h1>
      <h1 v-else class="font-poppins font-medium text-lg text-slate-950">Création d'une nouvelle annonce</h1>
      <div class="flex gap-4">
        <Button label="Retour" severity="secondary" v-if="pageNumber > 1" @click="() => pageNumber--"/>
        <Button label="Suivant" @click="() => pageNumber++"/>
      </div>
    </div>
    <AdForm v-if="pageNumber === 1"/>
    <TechnicalSheetForm v-if="pageNumber === 2"/>
    <ImageForm v-if="pageNumber === 3"/>
  </section>
</template>

<style scoped>

</style>