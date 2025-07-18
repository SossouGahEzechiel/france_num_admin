import {useAuthStore} from "~/stores/AuthStore.js";

export default defineNuxtRouteMiddleware((to) => {
	if (process.server) return

	const {isAuthenticated} = useAuthStore();

	if (!isAuthenticated) {
		return navigateTo(AppUrls.LOGIN.path);
	}
});
