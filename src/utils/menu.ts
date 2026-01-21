import { Home, Calendar, Ticket, Users, ChartBar, Settings } from "lucide-vue-next";

export const adminMenu = [
  {
    icon: Home,
    title: "Pagina Inicial",
    to: "/dashboard",
  },
  {
    icon: Users,
    title: "Usuários",
    to: "/dashboard/usuarios",
  },
  {
    icon: Calendar,
    title: "Eventos",
    to: "/dashboard/eventos",
  },
  {
    icon: Users,
    title: "Participantes",
    to: "/dashboard/participantes",
  },
  {
    icon: Ticket,
    title: "Tickets",
    to: "/dashboard/tickets",
  },
  {
    icon: ChartBar,
    title: "Análises",
    to: "/dashboard/analises",
  },
  {
    icon: Settings,
    title: "Configurações",
    to: "/dashboard/configuracoes",
  },
];
