import {useAuthStore} from "~/stores/AuthStore.js";

export default defineNuxtRouteMiddleware((to) => {
	const { isAuthenticated } = useAuthStore()

	if (isAuthenticated) {
		return navigateTo(AppUrls.DASHBOARD.path)
	}
});
