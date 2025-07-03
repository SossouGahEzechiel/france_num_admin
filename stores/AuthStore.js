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
			console.log("Init auth")
			if (process.client) {
				console.log("Client side:", localStorage.getItem('auth-token'), localStorage.getItem('auth-user'))
				const savedToken = localStorage.getItem('auth-token')
				const savedUser = localStorage.getItem('auth-user')

				if (savedToken !== "undefined" && savedToken !== null && savedUser !== "undefined" && savedUser !== null) {
					console.log("Saved user:", savedUser)
					this.token = savedToken
					this.user = readonly(JSON.parse(savedUser))
					// this.isAuthenticated = !!this.token && !!this.user;
				}
			}
		},

		// Connexion
		async login(credentials) {
			console.log("Login")
			try {
				const api = useApi();
				const apiUrls = ApiUrls();

				const response = await api.post(apiUrls.login, credentials);
				const loggedInUser = response.data.user;

				this.token = readonly(response.data.token)
				this.user = readonly(loggedInUser);

				console.log("user:", this.user);
				console.log("Api user:", response.data.user);

				// Sauvegarder en localStorage
				if (process.client) {
					localStorage.setItem('auth-token', response.data.token)
					localStorage.setItem('auth-user', JSON.stringify(loggedInUser));


					console.log("Symbol:", generateUserSymbol(loggedInUser.name));
					localStorage.setItem("user-symbol", generateUserSymbol(loggedInUser.name));
				}
				await navigateTo(AppUrls.DASHBOARD.path);

			} catch (e) {
				this.message = getErrorMessage(e);
				console.log("Error:", e);
			}

		},

		// Déconnexion
		async logout() {
			console.log("Logout");
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
				console.log("Error:", error);
			} finally {
				// Nettoyer l'état local dans tous les cas
				this.user = null
				this.token = null
				// this.isAuthenticated = false

				if (process.client) {
					console.log("Anorma")
					localStorage.removeItem('auth-token')
					localStorage.removeItem('auth-user')
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
				console.log("apiUrls.refreshData:", apiUrls.refreshData)
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
				console.log("Data loaded")
			} catch (error) {
				this.message = getErrorMessage(error);
				console.log("Error:", error);
				await this.logout()
			}
		}
	},

	getters: {
		isAuthenticated: (state) => !!state.user && !!state.token
	}
})