import type {
  NavigationGuard,
  NavigationGuardNext,
  RouteLocationNormalized,
} from "vue-router";

// ============================================
// FUNÇÃO DE AUTENTICAÇÃO
// ============================================
const isAuthenticated = (): boolean => {
  const token = localStorage.getItem("authToken") as any;

  if (!token) return false;

  try {
    // Verifica se o token não está expirado (opcional)
    const payload = JSON.parse(atob(token.split(".")[1]));
    const expiry = payload.exp * 1000;

    if (Date.now() >= expiry) {
      localStorage.removeItem("authToken");
      return false;
    }

    return true;
  } catch (error) {
    return Boolean(token);
  }
};

export const authGuard: NavigationGuard = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  const authenticated = isAuthenticated();
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const publicOnly = to.matched.some((record) => record.meta.publicOnly);

  // Se a rota requer autenticação e o usuário NÃO está logado
  if (requiresAuth && !authenticated) {
    // router.push("/");
    next({ path: "/", replace: true });
    return;
  }

  // Se a rota é só para público (login) e o usuário JÁ está logado
  if (publicOnly && authenticated) {
    next({ path: "/dashboard" });
    return;
  }

  // Permite acesso
  next();
};
