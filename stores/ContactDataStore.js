import {defineStore} from "pinia";
import {ApiUrls} from "~/utils/api-urls.js";
import getErrorMessage from "~/utils/get-error-message.js";

export const useContactDataStore = defineStore('ContactDataStore', {
	state: () => ({
		contactData: {
			id: "",
			phone: "",
			email: "",
			responsibleName: "",
			positionHeld: "",
			createdAt: "",
			updatedAt: ""
		},
		message: ""
	}),
	actions: {
		async get() {
			try {
				const response = await $fetch(ApiUrls.getAsUrl(ApiUrls.getConfigs));
				this.contactData = response.data;
				this.message = response.message || "Données chargées avec succès";
			} catch (error) {
				this.message = getErrorMessage(error);
			}
		},

		async update(data) {
			try {
				const response = await $fetch(ApiUrls.getAsUrl(ApiUrls.updateConfig) + "/" + this.contactData.id, {
					method: "PUT",
					body: data
				});

				this.contactData = response.data;
				this.message = response.message || "Données mises à jour avec succès";
			} catch (error) {
				this.message = getErrorMessage(error);
			}
		}
	}
});