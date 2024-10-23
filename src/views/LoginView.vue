<script setup lang="ts">

import InputText from "primevue/inputtext";
import FloatLabel from "primevue/floatlabel";
import Button from "primevue/button";
import {ref} from "vue";
import {useRouter} from "vue-router";
import {useAuthStore} from "../store/authStore.ts";


const store = useAuthStore();
const router = useRouter();

const inputs = [{
  placeholder: "Entrer votre email",
  label: "Email",
  modelValue: ref(""),
  id: "email",
}, {
  placeholder: "Entrer votre mot de passe",
  label: "Mot de passe",
  modelValue: ref(""),
  id: "password",
}];




async function handleConnexion() {
  try {
    const response = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: inputs[0].modelValue.value,
        password: inputs[1].modelValue.value,
      }),
    });
    const data = await response.json();
    if(data.statusCode === 200){
      console.log('login success:', data);
      store.setToken(data.access_token);
      router.push('/admin');
    }
  } catch (error) {
    console.error("Erreur lors de la connexion:", error);
  }
}

</script>

<template>
  <div>
    <h1>Login View</h1>

    <div class="w-1/2 h-1/2 flex flex-col gap-12 bg-white shadow-md border-gray-500 border-[1px]">
      <FloatLabel v-for="(item, index) in inputs" :key="index">
        <InputText :id="item.id" v-model="item.modelValue.value" :placeholder="item.placeholder"/>
        <label :id="item.id">{{ item.label }}</label>
      </FloatLabel>

      <Button label="connexion" @click="handleConnexion"/>
    </div>
  </div>
</template>

<style scoped>

</style>