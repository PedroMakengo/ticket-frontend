<script setup lang="ts">
import { DollarSign, Calendar, Users, Ticket } from "lucide-vue-next";
import DataTable from "@/components/dataTable/index.vue";

const headers = [
  { label: "Nome", key: "nome" },
  { label: "E-mail", key: "email" },
  { label: "Perfil", key: "role" },
  { label: "Estado", key: "activo" },
  { label: "Data de Cadastro", key: "criadoEm" },
];

const handleRowClick = (item: any) => {
  console.log("Linha clicada:", item);
};

const handleActions = (action: any) => {};
</script>

<template>
  <section class="flex flex-col">
    <div class="flex flex-col">
      <h2 class="text-2xl font-bold text-black">Bom dia, Makengo</h2>
      <p class="text-sm text-gray-500">Aqui está um resumo dos dados do sistema</p>
    </div>

    <div class="grid grid-cols-4 mt-8 gap-4">
      <div class="border border-gray-200 p-4 rounded-md bg-white">
        <div class="flex justify-between items-start">
          <div class="w-10 h-10 bg-[#0a5a5c]/10 flex justify-center items-center rounded-sm">
            <DollarSign class="text-[#0a5a5c]" />
          </div>
          <div
            class="px-2 py-1 bg-green-500/10 text-green-500 text-sm rounded-sm flex justify-center items-center w-fit h-fit"
          >
            <span class="text-sm font-medium">+12.4%</span>
          </div>
        </div>
        <div class="flex flex-col mt-2">
          <span class="text-sm">Receita Total</span>
          <h3 class="font-bold text-2xl">150.000 AOA</h3>
        </div>
      </div>

      <div class="border border-gray-200 p-4 rounded-md bg-white">
        <div class="flex justify-between items-start">
          <div class="w-10 h-10 bg-[#0a5a5c]/10 flex justify-center items-center rounded-sm">
            <Users class="text-[#0a5a5c]" />
          </div>
          <div
            class="px-2 py-1 bg-green-500/10 text-green-500 text-sm rounded-sm flex justify-center items-center w-fit h-fit"
          >
            <span class="text-sm font-medium">+12.4%</span>
          </div>
        </div>
        <div class="flex flex-col mt-2">
          <span class="text-sm">Total de Eventos</span>
          <h3 class="font-bold text-2xl">150</h3>
        </div>
      </div>

      <div class="border border-gray-200 p-4 rounded-md bg-white">
        <div class="flex justify-between items-start">
          <div class="w-10 h-10 bg-[#0a5a5c]/10 flex justify-center items-center rounded-sm">
            <Calendar class="text-[#0a5a5c]" />
          </div>
          <div
            class="px-2 py-1 bg-green-500/10 text-green-500 text-sm rounded-sm flex justify-center items-center w-fit h-fit"
          >
            <span class="text-sm font-medium">+12.4%</span>
          </div>
        </div>
        <div class="flex flex-col mt-2">
          <span class="text-sm">Total de Eventos</span>
          <h3 class="font-bold text-2xl">55</h3>
        </div>
      </div>

      <div class="border border-gray-200 p-4 rounded-md bg-white">
        <div class="flex justify-between items-start">
          <div class="w-10 h-10 bg-[#0a5a5c]/10 flex justify-center items-center rounded-sm">
            <Ticket class="text-[#0a5a5c]" />
          </div>
          <div
            class="px-2 py-1 bg-green-500/10 text-green-500 text-sm rounded-sm flex justify-center items-center w-fit h-fit"
          >
            <span class="text-sm font-medium">+12.4%</span>
          </div>
        </div>
        <div class="flex flex-col mt-2">
          <span class="text-sm">Tickets Gerados</span>
          <h3 class="font-bold text-2xl">350</h3>
        </div>
      </div>
    </div>

    <div class="flex flex-col bg-white mt-4 rounded-md border border-gray-200">
      <DataTable
        :headers="headers"
        :data="[]"
        :searchable="true"
        search-placeholder="Buscar usuários"
        :paginate="true"
        :items-per-page="5"
        @row-click="handleRowClick"
      >
        <!-- @ts-ignore -->
        <template #actions="{ item }">
          <button
            @click.stop="handleActions(item)"
            class="p-2 text-gray-500 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 cursor-pointer"
          >
            <Ellipsis />
          </button>
        </template>
      </DataTable>
    </div>
  </section>
</template>
