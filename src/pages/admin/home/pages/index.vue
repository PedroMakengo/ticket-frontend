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
  <section class="flex flex-col px-4 sm:px-6 lg:px-2 sm:py-6">
    <div class="flex flex-col">
      <h2 class="text-xl sm:text-2xl font-bold text-black">Bom dia, Makengo</h2>
      <p class="text-xs sm:text-sm text-gray-500 mt-1">Aqui está um resumo dos dados do sistema</p>
    </div>

    <!-- Grid de Cards - Responsivo -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-6 sm:mt-8 gap-3 sm:gap-4">
      <!-- Card 1: Receita Total -->
      <div
        class="border border-gray-200 p-4 sm:p-5 rounded-md bg-white shadow-sm hover:shadow-md transition-shadow"
      >
        <div class="flex justify-between items-start">
          <div
            class="w-10 h-10 sm:w-12 sm:h-12 bg-[#0a5a5c]/10 flex justify-center items-center rounded-sm"
          >
            <DollarSign class="text-[#0a5a5c] w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div
            class="px-2 py-1 bg-green-500/10 text-green-500 text-xs sm:text-sm rounded-sm flex justify-center items-center w-fit h-fit"
          >
            <span class="font-medium">+12.4%</span>
          </div>
        </div>
        <div class="flex flex-col mt-3">
          <span class="text-xs sm:text-sm text-gray-600">Receita Total</span>
          <h3 class="font-bold text-xl sm:text-2xl mt-1">150.000 AOA</h3>
        </div>
      </div>

      <!-- Card 2: Total de Usuários -->
      <div
        class="border border-gray-200 p-4 sm:p-5 rounded-md bg-white shadow-sm hover:shadow-md transition-shadow"
      >
        <div class="flex justify-between items-start">
          <div
            class="w-10 h-10 sm:w-12 sm:h-12 bg-[#0a5a5c]/10 flex justify-center items-center rounded-sm"
          >
            <Users class="text-[#0a5a5c] w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div
            class="px-2 py-1 bg-green-500/10 text-green-500 text-xs sm:text-sm rounded-sm flex justify-center items-center w-fit h-fit"
          >
            <span class="font-medium">+12.4%</span>
          </div>
        </div>
        <div class="flex flex-col mt-3">
          <span class="text-xs sm:text-sm text-gray-600">Total de Usuários</span>
          <h3 class="font-bold text-xl sm:text-2xl mt-1">150</h3>
        </div>
      </div>

      <!-- Card 3: Total de Eventos -->
      <div
        class="border border-gray-200 p-4 sm:p-5 rounded-md bg-white shadow-sm hover:shadow-md transition-shadow"
      >
        <div class="flex justify-between items-start">
          <div
            class="w-10 h-10 sm:w-12 sm:h-12 bg-[#0a5a5c]/10 flex justify-center items-center rounded-sm"
          >
            <Calendar class="text-[#0a5a5c] w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div
            class="px-2 py-1 bg-green-500/10 text-green-500 text-xs sm:text-sm rounded-sm flex justify-center items-center w-fit h-fit"
          >
            <span class="font-medium">+12.4%</span>
          </div>
        </div>
        <div class="flex flex-col mt-3">
          <span class="text-xs sm:text-sm text-gray-600">Total de Eventos</span>
          <h3 class="font-bold text-xl sm:text-2xl mt-1">55</h3>
        </div>
      </div>

      <!-- Card 4: Tickets Gerados -->
      <div
        class="border border-gray-200 p-4 sm:p-5 rounded-md bg-white shadow-sm hover:shadow-md transition-shadow"
      >
        <div class="flex justify-between items-start">
          <div
            class="w-10 h-10 sm:w-12 sm:h-12 bg-[#0a5a5c]/10 flex justify-center items-center rounded-sm"
          >
            <Ticket class="text-[#0a5a5c] w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div
            class="px-2 py-1 bg-green-500/10 text-green-500 text-xs sm:text-sm rounded-sm flex justify-center items-center w-fit h-fit"
          >
            <span class="font-medium">+12.4%</span>
          </div>
        </div>
        <div class="flex flex-col mt-3">
          <span class="text-xs sm:text-sm text-gray-600">Tickets Gerados</span>
          <h3 class="font-bold text-xl sm:text-2xl mt-1">350</h3>
        </div>
      </div>
    </div>

    <!-- Tabela de Dados - Responsivo -->
    <div
      class="flex flex-col bg-white mt-4 sm:mt-6 rounded-md border border-gray-200 shadow-sm overflow-hidden"
    >
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
            class="p-2 text-gray-500 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 cursor-pointer transition-colors"
          >
            <Ellipsis class="w-5 h-5" />
          </button>
        </template>
      </DataTable>
    </div>
  </section>
</template>
