<script setup lang="ts">
import { ref } from "vue";
import { Pencil, Mail, Phone, CloudUpload } from "lucide-vue-next";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { Spinner } from "@/components/ui/spinner";

interface IUserUpdate {
  nome: string;
  telefone: string;
  email: string;
  cargo: string;
  biografia?: string;
  senha: string;
  confirmaSenha?: string;
}

const form = ref<IUserUpdate>({
  nome: "Pedro Makengo",
  email: "pedromakengomiguel@gmail.com",
  telefone: "921538972",
  cargo: "Administrador",
  biografia:
    "Especialista em gestão de eventos com mais de 10 anos de experiência na área tecnológica e corporativa",
  senha: "123",
  confirmaSenha: "",
});
</script>

<template>
  <section class="flex flex-col lg:flex-row mt-4 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-0">
    <!-- Formulário de Edição -->
    <div
      class="flex flex-col flex-1 border border-gray-200 rounded-md bg-white px-4 sm:px-6 lg:px-8 py-6 sm:py-8"
    >
      <div class="flex gap-2 items-center">
        <Pencil class="w-5 h-5" />
        <h2 class="text-lg sm:text-xl font-bold">Editar Perfil</h2>
      </div>

      <!-- Campos do Formulário -->
      <div class="grid grid-cols-1 sm:grid-cols-2 mt-6 sm:mt-8 gap-4">
        <div class="grid w-full items-center gap-1.5">
          <Label for="nome" class="text-gray-500 text-sm">Nome Completo</Label>
          <Input id="nome" type="text" v-model="form.nome" class="py-5 sm:py-6 bg-gray-50" />
        </div>
        <div class="grid w-full items-center gap-1.5">
          <Label for="email" class="text-gray-500 text-sm">E-mail</Label>
          <Input id="email" type="email" v-model="form.email" class="py-5 sm:py-6 bg-gray-50" />
        </div>
        <div class="grid w-full items-center gap-1.5">
          <Label for="telefone" class="text-gray-500 text-sm">Telefone</Label>
          <Input id="telefone" type="tel" v-model="form.telefone" class="py-5 sm:py-6 bg-gray-50" />
        </div>
        <div class="grid w-full items-center gap-1.5">
          <Label for="cargo" class="text-gray-500 text-sm">Cargo</Label>
          <Input
            id="cargo"
            type="text"
            v-model="form.cargo"
            disabled
            class="py-5 sm:py-6 bg-gray-50"
          />
        </div>
      </div>

      <!-- Biografia -->
      <div class="grid grid-cols-1 mt-6 sm:mt-8 gap-4">
        <div class="grid w-full items-center gap-1.5">
          <Label for="biografia" class="text-gray-500 text-sm">Biografia</Label>
          <Textarea id="biografia" v-model="form.biografia" class="bg-gray-50 min-h-[100px]" />
        </div>
      </div>

      <div class="border-t border-gray-200 my-5 sm:my-6"></div>

      <!-- Segurança -->
      <div class="flex flex-col">
        <h2 class="font-bold text-base sm:text-lg">Segurança</h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 mt-4 gap-4">
          <div class="grid w-full items-center gap-1.5">
            <Label for="password" class="text-gray-500 text-sm">Senha</Label>
            <Input
              id="password"
              type="password"
              v-model="form.senha"
              class="py-5 sm:py-6 bg-gray-50"
            />
          </div>
          <div class="grid w-full items-center gap-1.5">
            <Label for="confirma-senha" class="text-gray-500 text-sm">Confirmar Senha</Label>
            <Input
              id="confirma-senha"
              type="password"
              v-model="form.confirmaSenha"
              class="py-5 sm:py-6 bg-gray-50"
            />
          </div>
        </div>

        <!-- Botões -->
        <div class="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-end mt-6">
          <button
            class="w-full sm:w-auto px-6 py-2.5 rounded-lg border border-slate-200 font-medium hover:bg-slate-50 transition-colors order-2 sm:order-1"
          >
            Cancelar
          </button>
          <button
            class="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[#0D4D4D] text-white font-medium hover:bg-opacity-90 shadow-md shadow-[#0D4D4D]/20 transition-all order-1 sm:order-2"
          >
            Salvar Alterações
          </button>
        </div>
      </div>
    </div>

    <!-- Card de Perfil -->
    <div
      class="flex flex-col border border-gray-200 rounded-md bg-white w-full lg:w-1/3 order-first lg:order-last"
    >
      <div
        class="h-32 sm:h-40 w-full bg-[#0D4D4D] rounded-tl-md rounded-tr-md flex justify-center items-end"
      >
        <div class="-mb-12 sm:-mb-15">
          <img
            src="https://avatars.githubusercontent.com/u/61626420?v=4"
            class="w-24 h-24 sm:w-35 sm:h-35 rounded-full border-4 border-white bg-white"
            alt="Pedro Makengo - Avatar"
          />
        </div>
      </div>

      <div class="flex flex-col mt-14 sm:mt-10 p-4 sm:p-6 lg:p-8 items-center">
        <div class="flex flex-col text-center">
          <h2 class="text-xl sm:text-2xl font-bold">{{ form.nome }}</h2>
          <span class="font-regular text-[#0D4D4D] uppercase text-sm sm:text-base">{{
            form.cargo
          }}</span>
        </div>

        <div class="flex flex-col gap-3 items-center text-center mt-4 w-full">
          <div class="flex gap-2 justify-center items-center">
            <Mail class="text-gray-500 flex-shrink-0" :size="16" />
            <span class="text-xs sm:text-sm text-gray-500 break-all">{{ form.email }}</span>
          </div>
          <div class="flex gap-2 justify-center items-center">
            <Phone class="text-gray-500 flex-shrink-0" :size="16" />
            <span class="text-xs sm:text-sm text-gray-500">{{ form.telefone }}</span>
          </div>

          <div class="bg-gray-100 p-3 sm:p-4 italic mt-2 rounded-md w-full">
            <p class="text-xs sm:text-sm text-gray-600 break-words">
              {{ form.biografia }}
            </p>
          </div>
        </div>

        <label
          for="upload-foto"
          class="bg-gray-100 p-3 sm:p-4 italic mt-6 sm:mt-8 rounded-md w-full flex gap-2 items-center justify-center cursor-pointer hover:bg-gray-200 transition"
        >
          <CloudUpload class="text-[#0D4D4D] w-5 h-5" />
          <span class="text-[#0D4D4D] text-sm sm:text-base">Fazer Upload de Foto</span>
          <input id="upload-foto" type="file" accept="image/*" class="hidden" />
        </label>
      </div>
    </div>
  </section>
</template>
