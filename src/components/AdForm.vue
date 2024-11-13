<script setup lang="ts">
import { ref, watch } from "vue"
import FloatLabel from "primevue/floatlabel";
import Select from "primevue/select";
import InputText from "primevue/inputtext";
import Textarea from 'primevue/textarea';
import {useAdsStore} from "../store/adsStore.ts";
import FileUpload  from 'primevue/fileupload';

const store = useAdsStore()
const selectedAd = ref(store.currentAd)

const form = ref({
  type: "",
  title:  "",
  price: '',
  description: "",
  zipcode: "",
  city:  "",
  room: "",
  bedroom: "",
  bathroom: "",
  parking: null,
  squarefoot: "",
})

const metadataForm = ref({
  floor: "",
  build_year: "",
  toilets: "",
  cellar: null,
  energy_class: "",
  gas_class: "",
})




watch(form.value, (value) => {
  console.log('new Value', value)
})

</script>

<template>
  <div class="flex gap-6 w-full flex-wrap">
    <FloatLabel>
      <InputText id="over_label" v-model="form.title" />
      <label for="over_label">Titre de l'annonce</label>
    </FloatLabel>
    <FloatLabel>
      <Textarea id="over_description" v-model="form.description" rows="5" cols="30" style="resize: none" />
      <label for="over_description">Description du bien</label>
    </FloatLabel>
    <FloatLabel>
      <InputText id="over_price" v-model="form.price" />
      <label for="over_price">Prix</label>
    </FloatLabel>
    <FloatLabel>
      <InputText id="over_zipcode" v-model="form.zipcode" />
      <label for="over_zipcode">Code Postal</label>
    </FloatLabel>
    <FloatLabel>
      <InputText id="over_city" v-model="form.city" />
      <label for="over_city">Ville</label>
    </FloatLabel>
    <Select v-model="form.type" :options="['Vente', 'Location']" placeholder="Type d'annonce" class="w-fit"/>
    <FloatLabel>
      <InputText id="over_squarfoot" v-model="form.squarefoot" />
      <label for="over_squarefoot">Surface (en m²)</label>
    </FloatLabel>


    // Metadata

    <FloatLabel>
      <InputText id="build_year" v-model="metadataForm.bathroom" />
      <label for="build_year">Année de construction</label>
    </FloatLabel>
    <FloatLabel>
      <InputText id="over_floor" v-model="metadataForm.floor" />
      <label for="over_floor">Etage</label>
    </FloatLabel>


    <FloatLabel>
      <InputText id="over_room" v-model="metadataForm.room" />
      <label for="over_room">Nombre de pièces</label>
    </FloatLabel>
    <FloatLabel>
      <InputText id="over_bedroom" v-model="metadataForm.bedroom" />
      <label for="over_bedroom">Nombre de chambres</label>
    </FloatLabel>
    <FloatLabel>
      <InputText id="over_bathroom" v-model="metadataForm.bathroom" />
      <label for="over_bathroom">Nombre de salle de bains</label>
    </FloatLabel>

    <Select v-model="metadataForm.parking" :options="['Oui', 'Non']" placeholder="Parking présent ?"/>

    <FloatLabel>
      <InputText id="toilets" v-model="metadataForm.toilets" />
      <label for="toilets">Nombre de Toilets</label>
    </FloatLabel>

    <Select v-model="metadataForm.cellar" :options="['Oui', 'Non']" placeholder="Cave présente ?"/>
    <Select v-model="metadataForm.energy_class" :options="['A', 'B', 'C', 'D', 'E', 'F', 'G']" placeholder="Valeur engétique"/>
    <Select v-model="metadataForm.gas_class" :options="['A', 'B', 'C', 'D', 'E', 'F', 'G']" placeholder="Valeur Gaz"/>

    // Ajout d'image
    <FileUpload name="demo[]" url="/api/upload" @upload="onAdvancedUpload($event)" :multiple="true" accept="image/*" :maxFileSize="1000000">
      <template #empty>
        <span>Drag and drop files to here to upload.</span>
      </template>
    </FileUpload>

  </div>
</template>

<style scoped>

</style>