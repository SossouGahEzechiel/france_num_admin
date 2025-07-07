import {defineStore} from 'pinia'
import getErrorMessage from "~/utils/get-error-message.js";
import {AppUrls} from "~/utils/app-urls.js";
import {useApi} from "~/composables/use-api.js";
import {ApiUrls} from "~/composables/api-urls.js";

const generateUserSymbol = function (name) {
	const [part1, part2, _] = name.split(" ");
	return part1.charAt(0).toUpperCase() + part2.charAt(0)?.toUpperCase() || "";
}

export const useAuthStore = defineStore('AuthStore', {

	state: () => ({
		user: null,
		token: null,
		message: ""
	}),

	actions: {
		// Initialiser depuis le localStorage/cookie au démarrage
		initAuth() {
			if (process.client) {
				const savedToken = localStorage.getItem('auth-token')
				const savedUser = localStorage.getItem('auth-user')

				if (savedToken !== "undefined" && savedToken !== null && savedUser !== "undefined" && savedUser !== null) {
					this.token = savedToken
					this.user = readonly(JSON.parse(savedUser))
				}
			}
		},

		// Connexion
		async login(credentials) {
			try {
				const api = useApi();
				const apiUrls = ApiUrls();

				const response = await api.post(apiUrls.login, credentials);
				const loggedInUser = response.data.user;

				this.token = readonly(response.data.token)
				this.user = readonly(loggedInUser);

				// Sauvegarder en localStorage
				if (process.client) {
					localStorage.setItem('auth-token', response.data.token)
					localStorage.setItem('auth-user', JSON.stringify(loggedInUser));


					localStorage.setItem("user-symbol", generateUserSymbol(loggedInUser.name));
				}
				await navigateTo(AppUrls.DASHBOARD.path);

			} catch (e) {
				this.message = getErrorMessage(e);
			}

		},

		// Déconnexion
		async logout() {
			const apiUrls = ApiUrls();
			const api = useApi();
			try {
				await api.post(apiUrls.logout, {}, {
					headers: {
						Authorization: `Bearer ${this.token}`
					}
				});
			} catch (error) {
				this.message = getErrorMessage(error);
			} finally {
				// Nettoyer l'état local dans tous les cas
				this.user = null
				this.token = null

				if (process.client) {
					localStorage.removeItem('auth-token')
					localStorage.removeItem('auth-user')
					localStorage.removeItem('user-symbol')
				}

				await navigateTo(AppUrls.LOGIN.path)
			}
		},

		// Récupérer le profil utilisateur
		async fetchUser() {
			const api = useApi();
			const apiUrls = ApiUrls();

			if (!this.token) return

			try {
				const response = await api.get(apiUrls.refreshData, {
					headers: {
						Authorization: `Bearer ${this.token}`
					}
				});

				const data = response.data;
				this.user = data

				if (process.client) {
					localStorage.setItem('auth-user', JSON.stringify(data));
					localStorage.setItem("user-symbol", generateUserSymbol(data.name))
				}
			} catch (error) {
				this.message = getErrorMessage(error);
				await this.logout()
			}
		}
	},

	getters: {
		isAuthenticated: (state) => !!state.user && !!state.token
	}
})