<script setup lang="ts">
import Select from 'primevue/select';
import InputText from "primevue/inputtext";
import {ref, watch} from 'vue';
import {useAdsStore} from "../store/adsStore.ts";
import { useDebounceFn } from '@vueuse/core'


const store = useAdsStore()
const filter = ref({
  type: "",
  city: "",
  square: "",
  price: "",
});



const makeSearch = useDebounceFn(() => {
  store.fetchAds();
}, 300);


watch(filter, (newValue) => {
    store.setType(newValue.type)
    store.setCity(newValue.city)
    store.setPrice(newValue.price)
    store.setSquare(newValue.square)
    makeSearch()
}, {deep: true});


const selects = [
  {options: ["Location", "Vente"], placeholder: "Choisir un type", modelValue: 'type'},
  {options: ["Asnières", "Courbevoie"], placeholder: "Choisir une ville", modelValue: 'city'},
];

const inputs = [
  {placeholder: "Entrer une surface minimum", modelValue: 'square', label: "Surface", id: "surface"},
  {placeholder: "Entrer un prix maximum", modelValue: 'price', label: "Prix", id: "price"},
];


</script>

<template>
  <section class="flex w-full h-auto item-center justify-center">
    <div class="flex gap-6 border-[1px] border-slate-300 w-fit h-auto py-4 px-6 shadow-sm rounded-2xl bg-[#fafafa]">
      <Select v-for="(item, index) in selects" :key="index" :options="item.options" :placeholder="item.placeholder" v-model="filter[item.modelValue as keyof typeof filter]"/>
      <InputText v-for="(item,index) in inputs" :key="index" :placeholder="item.placeholder" type="text" v-model="filter[item.modelValue as keyof typeof filter]"/>
    </div>

  </section>
</template>

<style scoped>

</style>