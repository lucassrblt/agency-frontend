<script setup lang="ts">
import Card from 'primevue/card';
import Button from "primevue/button";

interface AdItem {
  id: number;
  created_at: string,
  title: string;
  price: number;
  description: string;
  zipcode: string;
  city: string;
  room: number;
  bedroom: number;
  bathroom: number;
  parking: boolean;
  squarefoot: number;
  type: number;
  images: Images[];
}

interface Images {
  id: number;
  url: string;
}
const props = defineProps<{
  ads: AdItem[];
}>();

const { ads } = props;




</script>

<template>
  <div class="flex gap-10 flex-wrap justify-center mt-10">
    <Card  v-for="(item, index) in ads"  :key="index" class="border-[1px] border-slate-200 rounded-xl shadow-md max-w-64">
      <template #header>
        <div class="h-48">
          <img v-if="item.images && item.images.length > 0" alt="user header" class="h-full object-fill w-full rounded-xl" :src="item.images[0].url" />
        </div>
      </template>
      <template #title>{{ item.title }}</template>
      <template #subtitle>{{ item.city + " " + item.price + '€'}}</template>
      <template #content>
        <p class="m-0">
          {{ item.description}}
        </p>
      </template>
      <template #footer class>
        <div class="flex gap-4 mt-4">
          <Button label="Modifier" severity="secondary" outlined class="w-full" />
          <Button label="Supprimer" severity="danger" class="w-full" />
        </div>
      </template>
    </Card>
  </div>
</template>

<style scoped>

</style>