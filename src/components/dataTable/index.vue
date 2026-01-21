<template>
  <div class="p-3 sm:p-4 lg:p-6 flex flex-col gap-3 sm:gap-4 lg:gap-5 font-poppins">
    <!-- Search Input -->
    <div v-if="props.searchable" class="w-full flex flex-col">
      <InputGroup class="py-4 sm:py-5 lg:py-7 border-2 bg-gray-50">
        <InputGroupInput
          type="search"
          :placeholder="props.searchPlaceholder"
          v-model="searchTerm"
          class="text-sm sm:text-base"
        />
        <InputGroupAddon>
          <Search class="w-4 h-4 sm:w-5 sm:h-5" />
        </InputGroupAddon>
      </InputGroup>
    </div>

    <!-- Table -->
    <div class="w-full overflow-auto">
      <table class="w-full text-sm text-left text-gray-600 dark:text-gray-400">
        <thead class="text-xs text-gray-700 dark:text-gray-300 uppercase bg-gray-50">
          <tr>
            <th
              v-for="(header, index) in props.headers"
              :key="index"
              class="px-3 sm:px-4 lg:px-6 py-3 font-semibold whitespace-nowrap"
              scope="col"
            >
              {{ header.label }}
            </th>
            <th v-if="slots.actions" class="px-3 sm:px-4 lg:px-6 py-3 font-semibold" scope="col">
              <span class="sr-only">Ações</span>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr v-if="paginatedData.length === 0">
            <td
              :colspan="props.headers.length + (slots.actions ? 1 : 0)"
              class="px-3 sm:px-6 py-6 sm:py-8 text-center text-gray-500 dark:text-gray-400 text-sm"
            >
              Nenhum resultado encontrado
            </td>
          </tr>

          <tr
            v-else
            v-for="(item, rowIndex) in paginatedData"
            :key="item.id || rowIndex"
            @click="handleRowClick(item)"
            class="dark:bg-background-dark border-b dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 font-regular"
            :class="{ 'cursor-pointer': props.onRowClick }"
          >
            <td
              v-for="(header, cellIndex) in props.headers"
              :key="cellIndex"
              :class="[
                'px-3 sm:px-4 lg:px-6 py-3 sm:py-4',
                cellIndex === 0 ? 'text-gray-900 whitespace-nowrap' : '',
              ]"
              :scope="cellIndex === 0 ? 'row' : undefined"
            >
              <slot :name="`cell-${header.key}`" :item="item" :value="getCellValue(item, header)">
                <span
                  v-if="header.type === 'status' && header.statusConfig"
                  :class="getStatusBadgeClass(getStatusConfig(item, header).variant)"
                  class="text-xs sm:text-sm"
                >
                  {{ getStatusConfig(item, header).label }}
                </span>
                <span v-else class="text-xs sm:text-sm">{{
                  getCellValue(item, header) || "-"
                }}</span>
              </slot>
            </td>

            <td v-if="slots.actions" class="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-right">
              <slot name="actions" :item="item"></slot>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Pagination -->
    <nav
      v-if="props.paginate && filteredData.length > 0"
      aria-label="Table navigation"
      class="flex flex-col items-start justify-between p-2 sm:p-4 space-y-3 md:flex-row md:items-center md:space-y-0"
    >
      <span class="text-xs sm:text-sm font-normal text-gray-500 dark:text-gray-400">
        Mostrando
        <span class="font-semibold text-gray-900 dark:text-white">
          {{ startIndex + 1 }}-{{ Math.min(endIndex, filteredData.length) }}
        </span>
        de
        <span class="font-semibold text-gray-900 dark:text-white">
          {{ filteredData.length }}
        </span>
      </span>

      <ul class="inline-flex items-stretch -space-x-px">
        <li>
          <a
            href="#"
            @click.prevent="handlePrevious"
            :class="[
              'flex items-center justify-center h-full py-1.5 px-2 sm:px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-background-dark dark:border-white/20 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white transition-colors',
              { 'opacity-50 cursor-not-allowed': currentPage === 1 },
            ]"
          >
            <span class="sr-only">Anterior</span>
            <ArrowLeft class="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </li>

        <li v-for="pageNum in displayedPages" :key="pageNum">
          <a
            href="#"
            @click.prevent="goToPage(pageNum)"
            :class="[
              'flex items-center justify-center px-2 sm:px-3 py-2 sm:py-3 text-xs sm:text-sm leading-tight border transition-colors',
              currentPage === pageNum
                ? 'text-primary bg-primary/10 border hover:bg-primary/20 hover:text-primary dark:bg-primary/20 dark:border-primary dark:text-white'
                : 'text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-background-dark dark:border-white/20 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white',
            ]"
          >
            {{ pageNum }}
          </a>
        </li>

        <li>
          <a
            href="#"
            @click.prevent="handleNext"
            :class="[
              'flex items-center justify-center h-full py-1.5 px-2 sm:px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-background-dark dark:border-white/20 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white transition-colors',
              { 'opacity-50 cursor-not-allowed': currentPage === totalPages },
            ]"
          >
            <span class="sr-only">Próximo</span>
            <ArrowRight class="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, useSlots } from "vue";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { ArrowLeft, ArrowRight, Search } from "lucide-vue-next";

// Tipos
interface StatusConfig {
  variant: "yellow" | "green" | "red" | "blue" | "gray";
  label: string;
}

interface Header {
  label: string;
  key: string;
  type?: "status" | "text";
  statusConfig?: Record<string, StatusConfig>;
}

interface DataItem {
  id?: string | number;
  [key: string]: any;
}

interface Props {
  headers: any[];
  data: DataItem[];
  searchable?: boolean;
  searchPlaceholder?: string;
  paginate?: boolean;
  itemsPerPage?: number;
  onRowClick?: ((item: DataItem) => void) | null;
}

// Definir os slots tipados
interface Slots {
  actions?: (props: { item: DataItem }) => any;
  [key: `cell-${string}`]: (props: { item: DataItem; value: any }) => any;
}

// Props
const props = withDefaults(defineProps<Props>(), {
  searchable: true,
  searchPlaceholder: "Buscar...",
  paginate: true,
  itemsPerPage: 5,
  onRowClick: null,
});

// Emits
const emit = defineEmits<{
  "row-click": [item: DataItem];
}>();

// Slots
const slots = useSlots() as Slots;

// Estado
const searchTerm = ref("");
const currentPage = ref(1);

// Métodos
const getCellValue = (item: DataItem, header: Header): any => {
  return header.key.split(".").reduce((obj, k) => obj?.[k], item);
};

const getStatusConfig = (item: DataItem, header: Header): StatusConfig => {
  const value = getCellValue(item, header);
  return (
    header.statusConfig?.[value] || {
      variant: "gray" as const,
      label: value,
    }
  );
};

const getStatusBadgeClass = (variant: "yellow" | "green" | "red" | "blue" | "gray"): string => {
  const variants: Record<string, string> = {
    yellow: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    green: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    red: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    blue: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    gray: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
  };
  return `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
    variants[variant] || variants.gray
  }`;
};

const goToPage = (page: number): void => {
  currentPage.value = Math.max(1, Math.min(page, totalPages.value));
};

const handlePrevious = (): void => {
  if (currentPage.value > 1) {
    goToPage(currentPage.value - 1);
  }
};

const handleNext = (): void => {
  if (currentPage.value < totalPages.value) {
    goToPage(currentPage.value + 1);
  }
};

const handleRowClick = (item: DataItem): void => {
  if (props.onRowClick) {
    props.onRowClick(item);
  }
  emit("row-click", item);
};

// Computed
const filteredData = computed((): DataItem[] => {
  if (!searchTerm.value) return props.data;

  return props.data.filter((item) => {
    return Object.values(item).some((value) => {
      if (value === null || value === undefined) return false;
      return value.toString().toLowerCase().includes(searchTerm.value.toLowerCase());
    });
  });
});

const totalPages = computed((): number => {
  return Math.ceil(filteredData.value.length / props.itemsPerPage);
});

const startIndex = computed((): number => {
  return (currentPage.value - 1) * props.itemsPerPage;
});

const endIndex = computed((): number => {
  return startIndex.value + props.itemsPerPage;
});

const paginatedData = computed((): DataItem[] => {
  return props.paginate
    ? filteredData.value.slice(startIndex.value, endIndex.value)
    : filteredData.value;
});

const displayedPages = computed((): number[] => {
  const pages: number[] = [];
  const maxPages = Math.min(5, totalPages.value);

  for (let i = 0; i < maxPages; i++) {
    let pageNum: number;
    if (totalPages.value <= 5) {
      pageNum = i + 1;
    } else if (currentPage.value <= 3) {
      pageNum = i + 1;
    } else if (currentPage.value >= totalPages.value - 2) {
      pageNum = totalPages.value - 4 + i;
    } else {
      pageNum = currentPage.value - 2 + i;
    }
    pages.push(pageNum);
  }

  return pages;
});
</script>
