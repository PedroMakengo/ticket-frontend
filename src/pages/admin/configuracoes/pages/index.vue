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
  <section class="flex mt-4 gap-8">
    <div class="flex flex-col flex-1 border border-gray-200 rounded-md bg-white px-4 py-8">
      <div class="flex gap-2">
        <Pencil />
        <h2 class="text-xl font-bold">Editar Perfil</h2>
      </div>

      <div class="grid grid-cols-2 mt-8 gap-4">
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

      <div class="grid grid-cols-1 mt-8 gap-4">
        <div class="grid w-full items-center gap-1.5">
          <Label for="nome" class="text-gray-500 text-sm">Biografia</Label>
          <Textarea v-model="form.biografia" class="bg-gray-50" />
        </div>
      </div>

      <div class="border-t border-gray-200 my-5"></div>

      <div class="flex flex-col">
        <h2 class="font-bold">Segurança</h2>

        <div class="grid grid-cols-2 mt-4 gap-4">
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
            <Label for="cargo" class="text-gray-500 text-sm">Confirmar Senha</Label>
            <Input
              id="cargo"
              type="password"
              v-model="form.confirmaSenha"
              class="py-5 sm:py-6 bg-gray-50"
            />
          </div>
        </div>

        <div class="flex gap-2 justify-end mt-6">
          <button
            class="px-6 py-2.5 rounded-lg border border-slate-200 font-medium hover:bg-slate-50 transition-colors"
          >
            Cancelar
          </button>
          <button
            class="px-6 py-2.5 rounded-lg bg-[#0D4D4D] text-white font-medium hover:bg-opacity-90 shadow-md shadow-[#0D4D4D]/20 transition-all"
          >
            Salvar Alterações
          </button>
        </div>
      </div>
    </div>
    <div class="flex flex-col border border-gray-200 rounded-md bg-white w-1/3">
      <div
        class="h-40 w-full bg-[#0D4D4D] rounded-tl-md rounded-tr-md flex justify-center items-end"
      >
        <div class="-mb-15">
          <img
            src="https://avatars.githubusercontent.com/u/61626420?v=4"
            class="w-35 h-35 rounded-full border-white p-1 bg-white"
            alt="Pedro Makengo - Avatar"
          />
        </div>
      </div>
      <div class="flex flex-col mt-10 p-8 items-center">
        <div class="flex flex-col text-center">
          <h2 class="text-2xl font-bold">{{ form.nome }}</h2>
          <span class="font-regular text-[#0D4D4D] uppercase">{{ form.cargo }}</span>
        </div>

        <div class="flex flex-col gap-3 items-center text-center mt-4">
          <div class="flex gap-2 justify-center items-center">
            <Mail class="text-gray-500" :size="16" />
            <span class="text-sm text-gray-500">{{ form.email }}</span>
          </div>
          <div class="flex gap-2">
            <Phone class="text-gray-500" :size="16" />
            <span class="text-sm text-gray-500">{{ form.telefone }}</span>
          </div>

          <div class="bg-gray-100 p-4 italic mt-2 rounded-md">
            <p class="text-sm text-gray-600">
              {{ form.biografia }}
            </p>
          </div>
        </div>

        <label
          for="upload-foto"
          class="bg-gray-100 p-4 italic mt-8 rounded-md w-full flex gap-2 items-center justify-center cursor-pointer hover:bg-gray-200 transition"
        >
          <CloudUpload class="text-[#0D4D4D]" />
          <span class="text-[#0D4D4D]">Fazer Upload de Foto</span>

          <input id="upload-foto" type="file" accept="image/*" class="hidden" />
        </label>
      </div>
    </div>
  </section>
</template>
