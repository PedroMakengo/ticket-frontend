<script setup lang="ts">
import DataTable from "@/components/dataTable/index.vue";
import Title from "@/components/title/index.vue";

const headers = [
  { label: "Nome", key: "nome" },
  { label: "E-mail", key: "email" },
  { label: "Função", key: "role" },
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
    <div class="flex justify-between">
      <Title titulo="Usuário" descricao="Gestão de todos os usuários" />
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
