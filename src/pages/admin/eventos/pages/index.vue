<script setup lang="ts">
import DataTable from "@/components/dataTable/index.vue";
import Title from "@/components/title/index.vue";
import { Plus } from "lucide-vue-next";

const headers = [
  { label: "Evento", key: "titulo" },
  { label: "Descrição", key: "descricao" },
  { label: "Local", key: "local" },
  { label: "Data", key: "data" },
  { label: "Hora Início", key: "horaInicio" },
  { label: "Hora Fim", key: "horaFim" },
  { label: "Data de Cadastro", key: "criadoEm" },
];

const handleRowClick = (item: any) => {
  console.log("Linha clicada:", item);
};

const handleActions = (action: any) => {};
</script>

<template>
  <section class="mt-4">
    <div class="flex justify-between">
      <Title titulo="Eventos" descricao="Gestão de todos os eventos" />
      <button
        class="flex gap-2 justify-center items-center bg-[#0a5a5c] rounded-md px-4 text-sm text-white"
      >
        <Plus />
        Adicionar Evento
      </button>
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
