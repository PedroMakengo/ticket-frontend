<script setup lang="ts">
import DataTable from "@/components/dataTable/index.vue";
import Title from "@/components/title/index.vue";

const headers = [
  { label: "Codigo", key: "codigo" },
  { label: "Status", key: "status" },
  { label: "Evento", key: "evento" },
  { label: "Tipo Lugar", key: "tipoLugar" },
  { label: "Detalhe Lugar", key: "tipoLugarDetalhes" },
  { label: "Data de Cadastro", key: "criadoEm" },
];

const handleRowClick = (item: any) => {
  console.log("Linha clicada:", item);
};

const handleActions = (action: any) => {};
</script>

<template>
  <section class="px-4 sm:px-6 lg:px-0">
    <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0">
      <Title titulo="Tickets" descricao="Gestão de todos os tickets" />
    </div>

    <div
      class="flex flex-col bg-white mt-3 sm:mt-4 rounded-md border border-gray-200 overflow-hidden"
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
            class="p-1.5 sm:p-2 text-gray-500 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 cursor-pointer transition-colors"
          >
            <Ellipsis class="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </template>
      </DataTable>
    </div>
  </section>
</template>
