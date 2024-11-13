<script setup lang="ts">

import {ref} from "vue";
// import {useRouter} from "vue-router";
// import {useAuthStore} from "../store/authStore.ts";
import BG from "../assets/images/admin/bg.jpg"
import {useToast} from "primevue/usetoast"


// const router = useRouter();
const toast = useToast();

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


function test(){
  toast.add({ severity: 'success', summary: 'Success Message', detail: 'Order submitted' });
}



// async function handleConnexion() {
//   try {
//     const response = await fetch("http://localhost:3000/user/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         email: inputs[0].modelValue.value,
//         password: inputs[1].modelValue.value,
//       }),
//     });
//     const data = await response.json();
//     console.log('data received', data);
//     if (data.statusCode === 200) {
//       console.log('login success:', data);
//
//       // router.push('/admin');
//     }
//   } catch (error) {
//     console.error("Erreur lors de la connexion:", error);
//   }
// }

</script>

<template>
  <section class="w-full h-full flex justify-center items-center">
    <div class="h-full w-1/2">
      <img :src="BG" class="w-full h-full object-cover">
    </div>
    <div class="flex flex-col w-1/2 justify-center items-center">
      <div class="w-[60%] flex flex-col gap-10">
        <div class="flex flex-col gap-2">
          <h1 class="text-neutral-900 text-2xl font-medium font-poppins">Connexion Administrateur</h1>
          <p class="text-neutral-700 text-md font-regular font-poppins">Portail de connexion à la partie
            administrateur</p>
        </div>
        <div class="flex flex-col gap-4 w-full">
          <div v-for="(item, index) in inputs" :key="index">
            <input :id="item.id" v-model="item.modelValue.value" :placeholder="item.placeholder"
                   class="w-full rounded-sm border-[1px] border-slate-300 min-h-9 min-w-20 text-sm text-slate-500 font-poppins font-regular px-4"/>
          </div>
          <button class="w-full min-h-10 bg-slate-950 text-slate-50 rounded-sm font-poppins font-medium text-md" @click="test">
            Connexion
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>