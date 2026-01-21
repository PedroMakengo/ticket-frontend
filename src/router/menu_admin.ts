import PageAdmin from "@/pages/admin/home/pages/index.vue";
import PageUsuarios from "@/pages/admin/usuarios/pages/index.vue";
import PageEventos from "@/pages/admin/eventos/pages/index.vue";
import PageParticipantes from "@/pages/admin/participantes/pages/index.vue";
import PageRelatorios from "@/pages/admin/relatorios/pages/index.vue";
import PageConfiguracao from "@/pages/admin/configuracoes/pages/index.vue";
import PageTickets from "@/pages/admin/tickets/pages/index.vue";

export const routesAdmin = [
  {
    path: "",
    component: PageAdmin,
    meta: { requiresAuth: false },
  },
  {
    path: "usuarios",
    component: PageUsuarios,
    meta: { requiresAuth: false },
  },
  {
    path: "eventos",
    component: PageEventos,
    meta: { requiresAuth: false },
  },
  {
    path: "participantes",
    component: PageParticipantes,
    meta: { requiresAuth: false },
  },
  {
    path: "analises",
    component: PageRelatorios,
    meta: { requiresAuth: false },
  },

  {
    path: "tickets",
    component: PageTickets,
    meta: { requiresAuth: false },
  },
  {
    path: "configuracoes",
    component: PageConfiguracao,
    meta: { requiresAuth: false },
  },
];
