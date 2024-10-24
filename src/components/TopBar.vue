<script setup lang="ts">
import Select from 'primevue/select';
import InputText from "primevue/inputtext";
import {ref, watch} from 'vue';
import {useAdsStore} from "../store/adsStore.ts";
import { useDebounceFn } from '@vueuse/core'
import Button  from 'primevue/button';
import {useRouter} from "vue-router";
import {computed} from "vue";

const router = useRouter()
const store = useAdsStore()

const cities = computed(() => store.cities);


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
  {options: cities.value, placeholder: "Choisir une ville", modelValue: 'city'},
];

const inputs = [
  {placeholder: "Entrer une surface minimum", modelValue: 'square', label: "Surface", id: "surface"},
  {placeholder: "Entrer un prix maximum", modelValue: 'price', label: "Prix", id: "price"},
];


</script>

<template>
  <section class="flex w-full h-auto items-center justify-between">
    <div class="flex gap-6 border-[1px] border-slate-300 w-fit h-auto py-4 px-6 shadow-sm rounded-2xl bg-[#fafafa]">
      <Select v-for="(item, index) in selects" :key="index" :options="item.options" :placeholder="item.placeholder" v-model="filter[item.modelValue as keyof typeof filter]"/>
      <InputText v-for="(item,index) in inputs" :key="index" :placeholder="item.placeholder" type="text" v-model="filter[item.modelValue as keyof typeof filter]"/>
    </div>

      <Button label="Créer" severity="primary" @click="() => router.push({path: '/annonces'})"/>
  </section>
</template>

<style scoped>

</style>