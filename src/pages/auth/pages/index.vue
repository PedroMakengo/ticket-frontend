<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";

// Variaveis
const loading = ref(false);
const router = useRouter();

const onSubmitAuthentication = async () => {
  loading.value = true;
  router.push("/dashboard");
};
</script>

<template>
  <section class="flex flex-col lg:flex-row min-h-screen">
    <div
      class="w-full lg:w-1/2 bg-linear-to-br from-[#0a5a5c]/80 via-[#0a5a5c]/90 to-[#084547]/80 backdrop-blur-md"
    >
      <div
        class="flex gap-6 md:gap-10 flex-col justify-center h-full px-6 sm:px-10 md:px-16 lg:px-20 py-12 lg:py-0"
      >
        <div class="flex gap-2 items-center">
          <div class="w-10 h-10 bg-white/10 rounded-full flex justify-center items-center">
            <span class="material-symbols-outlined text-xl text-white">confirmation_number</span>
          </div>
          <h2 class="text-white text-xl sm:text-2xl font-bold">EventHub</h2>
        </div>

        <div class="w-full flex flex-col gap-4 md:gap-6">
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Crie experiências memoráveis hoje.
          </h1>
          <p class="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-regular">
            A plataforma completa para gestão de eventos: da criação à validação de tickets na
            porta.
          </p>
        </div>

        <div class="flex items-center gap-6 md:gap-10">
          <div class="flex -space-x-3">
            <div
              class="size-8 sm:size-10 rounded-full border-2 border-[#0d7072] bg-cover"
              style="
                background-image: url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuAfhJas3EHeEsw45lbVe4jLNhxMJBAHUOts0xJufd8ZP9uM44IyYSiexVBkAJ87JoMiCfQyODa5FvKnI8fQ9pEqkoQIVpYnX9rsijzyofQly_pEaL9vDAU0i_xPVhWSUHsS5M7uxsiRMIqSmhN4bRJXiE5FutJZz4s9buzyXDZxlpcJI-Rc9A6crdtm9x2Q_p0iOaF371N_XcfmJk6CMxPJPVfPBz9PjDUZitk_E9Wep0Gs9BpZ5QQxvEuqxJvheyaBePnt5rP5i6I&quot;);
              "
            ></div>
            <div
              class="size-8 sm:size-10 rounded-full border-2 border-[#0d7072] bg-cover"
              style="
                background-image: url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuAuaN5vU1wWTC10J0opj79zFiyv2VPlg4YwTa4s_yUjXc4CHApfki_HZICyZpIGUV20yJA-QoF7fqvfFnqRhjOI7kSabcacEgyAOtHuZFrRy_MFay0SolCX1OCPfK_QcySEC0_xKGGEg_04p1TCu68XG5-vh2XdaOp1cau5-eREpzGrrjL39JtGzmRoS_uT6DH7wtNkTrYpKM9Z0XUQOIt6a47c3lOsb6L25taH25OPkCZ6hZkwfcXsySYMCgK-08OULt12cDTYYDg&quot;);
              "
            ></div>
            <div
              class="size-8 sm:size-10 rounded-full border-2 border-[#0d7072] bg-cover"
              style="
                background-image: url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuA6G3Zrz2X4W4DM6skwyuD4CkeRy7238CkKA49TV31t3ZNBwsY_dNCiNWoyTOqcarAAPCYiWjjOoWxAfsBnNhSuc5Lov2VKgsvJI5onU38qtaStaYEe5ggPC9OL6o8yeE-MNktFo10ZNhyLPpk08WJAxqRP9-tDipifqnVTmWwvotX_qBKIx3W-BcAEb4iFMxhHEDwAMWwQk-7D4U5QOBOaVK2YWWxtnKhCm7doQFMDKniy6vUbwlfpHAGqtMV9o72rodIQ8UAWgSY&quot;);
              "
            ></div>
          </div>
          <p class="text-white text-sm sm:text-base">+10k organizadores já confiam em nós</p>
        </div>
      </div>
    </div>
    <aside
      class="w-full lg:w-1/2 py-8 md:py-12 lg:py-4 px-6 sm:px-10 md:px-20 lg:px-35 flex flex-col justify-center items-center"
    >
      <div class="flex flex-col gap-2 w-full max-w-md">
        <h2 class="text-2xl sm:text-3xl font-bold">Bem-vindo de volta</h2>
        <p class="text-gray-400 text-sm sm:text-base">
          Introduza os seus dados para aceder ao painel.
        </p>
      </div>

      <div class="flex flex-col mt-8 md:mt-10 gap-4 w-full max-w-md">
        <div class="grid w-full items-center gap-1.5">
          <Label for="email">Email</Label>
          <Input id="email" type="email" class="py-5 sm:py-6" placeholder="example@email.com" />
        </div>

        <div class="grid w-full items-center gap-1.5">
          <div class="flex justify-between">
            <Label for="senha">Palavra-passe</Label>
            <a to="/" class="text-xs sm:text-sm text-[#0a5a5c]">Esqueci-me da palavra-passe</a>
          </div>
          <Input id="senha" type="password" class="py-5 sm:py-6" placeholder="palavra-passe" />
        </div>

        <div class="grid w-full items-center gap-1.5">
          <button
            class="bg-[#0a5a5c] py-3 sm:py-4 rounded-md text-white font-medium justify-center items-center flex"
            @click.prevent="onSubmitAuthentication"
          >
            <spinner v-if="loading" />
            <span v-else>Entrar</span>
          </button>
        </div>
      </div>
    </aside>
  </section>
</template>

<style scoped lang="scss"></style>
