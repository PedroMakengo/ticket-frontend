<script lang="ts" setup>
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import { adminMenu } from "@/utils/menu";
import { LogOut } from "lucide-vue-next";

import DataTable from "@/components/dataTable/index.vue";
import { RouterView } from "vue-router";

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
  <SidebarProvider>
    <div class="flex h-screen w-full overflow-hidden">
      <Sidebar class="bg-white border-r">
        <SidebarHeader class="bg-white">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg">
                <div
                  class="flex bg-[#0a5a5c] aspect-square size-8 items-center justify-center rounded-full text-sidebar-primary-foreground"
                >
                  <span class="material-symbols-outlined text-sm text-white"
                    >confirmation_number</span
                  >
                </div>
                <div class="grid flex-1 text-left text-sm leading-tight">
                  <span class="truncate font-semibold text-gray-900">EventHub</span>
                  <span class="truncate text-xs text-gray-600">Dashboard</span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent class="bg-white">
          <SidebarGroup>
            <SidebarGroupLabel class="text-gray-600">Painel Administrativo</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu class="py-2" v-for="(element, index) in adminMenu" :key="index">
                <SidebarMenuItem>
                  <SidebarMenuButton
                    as-child
                    class="text-gray-700 hover:bg-gray-100 hover:text-[#0a5a5c]"
                  >
                    <RouterLink :to="element.to">
                      <component :is="element.icon" />
                      <span>{{ element.title }}</span>
                    </RouterLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <RouterLink to="/" class="flex gap-2 py-4 text-sm items-center">
            <LogOut />
            <span>Terminar Sessão</span>
          </RouterLink>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>

      <SidebarInset class="bg-[#fafaf9] flex-1 flex flex-col w-full min-w-0">
        <header
          class="flex h-16 shrink-0 items-center justify-between gap-2 border-b bg-white px-4"
        >
          <div class="flex items-center gap-2">
            <SidebarTrigger class="-ml-1" />
          </div>

          <div class="flex gap-2 justify-center items-center">
            <div class="flex justify-center items-center gap-2">
              <img
                src="https://avatars.githubusercontent.com/u/61626420?v=4"
                class="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
                alt="Pedro Makengo - Avatar"
              />
              <div class="hidden sm:flex flex-col">
                <span class="text-sm font-bold">Pedro Makengo</span>
                <span class="text-xs sm:text-sm">Administrador</span>
              </div>
            </div>
          </div>
        </header>

        <main class="flex-1 overflow-y-auto overflow-x-hidden w-full">
          <div class="w-full h-full p-2 sm:p-4">
            <RouterView />
          </div>
        </main>
      </SidebarInset>
    </div>
  </SidebarProvider>
</template>

<style>
#testo {
  background: red;
}
</style>
