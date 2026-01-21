<script lang="ts" setup>
import {
  Chart as ChartJS,
  Title,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
} from "chart.js";
import { Bar, Pie, Doughnut, Line } from "vue-chartjs";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
);

const data = {
  labels: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],
  datasets: [
    {
      label: "Organizadores registrados",
      backgroundColor: "#0D4D4D",
      data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
    },
  ],
};

const eventosComMaiorInscricao = {
  labels: ["Evento 1", "Evento 2", "Evento 3", "Evento 4"],
  datasets: [
    {
      label: "Data One",
      backgroundColor: ["#0D4D4D"],
      data: [40, 20, 80, 10],
    },
  ],
};

const tickets = {
  labels: ["Aprovado", "Rejeitado"],
  datasets: [
    {
      backgroundColor: ["#0D4D4D", "oklch(57.7% 0.245 27.325)"],
      data: [40, 20],
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
};
</script>

<template>
  <section class="mt-5 flex flex-col gap-4 sm:gap-6 lg:gap-8">
    <!-- Primeira linha de gráficos -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
      <div
        class="bg-white py-4 px-5 sm:py-5 sm:px-8 lg:px-10 border border-gray-300 rounded-md h-64 sm:h-72 lg:h-80"
      >
        <Bar :data="data" :options="options" />
      </div>
      <div
        class="bg-white py-4 px-5 sm:py-5 sm:px-8 lg:px-10 border border-gray-300 rounded-md h-64 sm:h-72 lg:h-80"
      >
        <Pie :data="eventosComMaiorInscricao" :options="options" />
      </div>
    </div>

    <!-- Segunda linha de gráficos -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
      <div
        class="bg-white py-4 px-5 sm:py-5 sm:px-8 lg:px-10 border border-gray-300 rounded-md h-64 sm:h-72 lg:h-80"
      >
        <!-- Tickets Aprovados e Rejeitado -->
        <Doughnut :data="tickets" :options="options" />
      </div>
      <div
        class="bg-white py-4 px-5 sm:py-5 sm:px-8 lg:px-10 border border-gray-300 rounded-md h-64 sm:h-72 lg:h-80"
      >
        <!-- Participantes Mensalmente -->
        <Line :data="data" :options="options" />
      </div>
    </div>
  </section>
</template>
