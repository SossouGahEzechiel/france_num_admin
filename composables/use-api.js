import {useAuthStore} from "~/stores/AuthStore.js";
import {$fetch} from "ofetch";

export const useApi = () => {
	const config = useRuntimeConfig();
	const apiBase = config.public.apiBase;
	const {token, logout, softLogout} = useAuthStore(); // Supposons que logout est une action dans AuthStore

	// Créer une instance personnalisée de $fetch avec intercepteur
	const apiFetch = $fetch.create({
		baseURL: apiBase,
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
			"ngrok-skip-browser-warning": "true",
			Authorization: `Bearer ${token}`,
		},
		// Intercepteur pour gérer les erreurs
		async onResponseError({response}) {
			if (response.status === 401) {
				// Action à effectuer en cas de 401
				console.error("Erreur 401 : Non autorisé");
				await softLogout();
			}
		},
	});

	return {
		async get(endpoint, options = {}) {
			return await apiFetch(endpoint, {
				method: "GET",
				...options,
				headers: {...options.headers},
			});
		},

		async post(endpoint, data, options = {}) {
			return await apiFetch(endpoint, {
				method: "POST",
				body: data,
				...options,
				headers: {...options.headers},
			});
		},

		async put(endpoint, data, options = {}) {
			return await apiFetch(endpoint, {
				method: "PUT",
				body: data,
				...options,
				headers: {...options.headers},
			});
		},

		async delete(endpoint, options = {}) {
			return await apiFetch(endpoint, {
				method: "DELETE",
				...options,
				headers: {...options.headers},
			});
		},
	};
};