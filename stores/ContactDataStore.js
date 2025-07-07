import {defineStore} from "pinia";
import {ApiUrls} from "~/composables/api-urls.ts";
import getErrorMessage from "~/utils/get-error-message.js";
import {useApi} from "~/composables/use-api.js";


export const useContactDataStore = defineStore('ContactDataStore', {
	state: () => ({
		contactData: {
			id: "",
			phone: "",
			email: "",
			responsibleName: "",
			positionHeld: "",
			createdAt: "",
			updatedAt: "",
			adminName: ""
		},
		isSuccess: true,
		message: ""
	}),
	actions: {
		async get() {
			const apiUrls = ApiUrls();
			const api = useApi();

			try {
				const response = await api.get(apiUrls.getConfigs)
				this.contactData = response.data;
				this.message = response.message || "Données chargées avec succès";
				this.isSuccess = true;
			} catch (error) {
				this.message = getErrorMessage(error);
				this.isSuccess = false;
			}
		},

		async update(data) {
			const apiUrls = ApiUrls();
			const api = useApi();

			try {
				const response = await api.put(
					apiUrls.updateConfig + "/" + this.contactData.id,
					data
				);

				this.contactData = response.data;
				this.message = response.message || "Données mises à jour avec succès";
				this.isSuccess = true;
			} catch (error) {
				this.message = getErrorMessage(error);
				this.isSuccess = false;
			}
		}
	}
});