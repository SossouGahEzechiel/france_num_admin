import {useAuthStore} from "~/stores/AuthStore.js";

export default defineNuxtPlugin(async () => {
	const authStore = useAuthStore()

	// Initialiser l'authentification au démarrage
	authStore.initAuth();

	// Si un token existe, vérifier qu'il est toujours valide
	if (authStore.token) {
		try {
			await authStore.fetchUser()
		} catch (error) {
			console.log("Error:", error);
			console.log('Token invalide, déconnexion automatique')
			await authStore.logout();
		}
	}
})