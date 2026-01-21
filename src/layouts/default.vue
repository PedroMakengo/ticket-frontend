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
</script>

<template>
  <SidebarProvider>
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
                    <!-- {{ element.icon }} -->
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
    <SidebarInset class="bg-[#fafaf9]">
      <header
        class="flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12"
      >
        <div class="flex items-center gap-2 px-4">
          <SidebarTrigger class="-ml-1" />
        </div>

        <div class="flex gap-2 justify-center items-center pr-5">
          <div class="flex justify-center items-center gap-2">
            <img
              src="https://avatars.githubusercontent.com/u/61626420?v=4"
              class="w-10 h-10 rounded-full"
              alt="Pedro Makengo - Avatar"
            />
            <div class="flex flex-col">
              <span class="text-sm font-bold">Pedro Makengo</span>
              <span class="text-sm">Administrador</span>
            </div>
          </div>
        </div>
      </header>

      <!-- Isso é que vai ser alterado -->
      <div class="flex flex-1 flex-col gap-4 p-4 pt-0">
        <RouterView />
      </div>
      <!-- Isso é que vai ser alterado -->
    </SidebarInset>
  </SidebarProvider>
</template>
