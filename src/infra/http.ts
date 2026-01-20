import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig } from "axios";

// Configuração da instância do Axios
export const api: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor de Request - adiciona token de autenticação
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Interceptor de Response - trata erros globalmente
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      // Redirecionar para login ou renovar token
      localStorage.removeItem("authToken");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);

// Interface genérica para respostas
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

// Classe de serviço base
class ApiService {
  // Método auxiliar para extrair mensagem de erro
  private getErrorMessage(error: any): string {
    return (
      error.response?.data?.error ||
      error.response?.data?.message ||
      error.message ||
      "Erro na requisição"
    );
  }

  // GET
  async get<T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<ApiResponse<T>> {
    try {
      const response = await api.get<T>(url, config);
      return {
        data: response.data,
        success: true,
        message: "Requisição realizada com sucesso",
      };
    } catch (error: any) {
      return {
        data: null as T,
        success: false,
        message: this.getErrorMessage(error),
      };
    }
  }

  // POST
  async post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<ApiResponse<T>> {
    try {
      const response = await api.post<T>(url, data, config);
      return {
        data: response.data,
        success: true,
        message: "Requisição realizada com sucesso",
      };
    } catch (error: any) {
      return {
        data: null as T,
        success: false,
        message: this.getErrorMessage(error),
      };
    }
  }

  // PUT
  async put<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<ApiResponse<T>> {
    try {
      const response = await api.put<T>(url, data, config);
      return {
        data: response.data,
        success: true,
        message: "Requisição realizada com sucesso",
      };
    } catch (error: any) {
      return {
        data: null as T,
        success: false,
        message: this.getErrorMessage(error),
      };
    }
  }

  // PATCH
  async patch<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<ApiResponse<T>> {
    try {
      const response = await api.patch<T>(url, data, config);
      return {
        data: response.data,
        success: true,
        message: "Requisição realizada com sucesso",
      };
    } catch (error: any) {
      return {
        data: null as T,
        success: false,
        message: this.getErrorMessage(error),
      };
    }
  }

  // DELETE
  async delete<T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<ApiResponse<T>> {
    try {
      const response = await api.delete<T>(url, config);
      return {
        data: response.data,
        success: true,
        message: "Requisição realizada com sucesso",
      };
    } catch (error: any) {
      return {
        data: null as T,
        success: false,
        message: this.getErrorMessage(error),
      };
    }
  }
}

export const apiService = new ApiService();
