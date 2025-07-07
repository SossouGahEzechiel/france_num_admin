import {defineStore} from "pinia";
import getErrorMessage from "~/utils/get-error-message.js";
import {ApiUrls} from "~/composables/api-urls.js";
import {useApi} from "~/composables/use-api.js";


export const useNewMessagesStore = defineStore("NewMessagesStore", {
	state: () => ({
		newMessages: [],
		message: "",
		isSuccess: true
	}),

	actions: {
		async getNewMessages() {
			const apiUrls = ApiUrls();
			const api = useApi();

			try {
				const response = await api.get(apiUrls.getNewMessages)

				this.newMessages = response.data;
				this.message = response.message;
				this.isSuccess = true;
			} catch (error) {
				this.message = getErrorMessage(error);
				console.log("Error:", error);
				this.isSuccess = false;
			}
		},

		async getOldMessages() {
			const api = useApi();
			const apiUrls = ApiUrls();

			try {
				const response = await api.get(apiUrls.getOldMessages);

				this.newMessages = response.data;
				this.message = response.message;
			} catch (error) {
				this.message = getErrorMessage(error);
				console.log("Error:", error);
			}
		},

		async getAllMessages() {
			const api = useApi();
			const apiUrls = ApiUrls();

			try {
				const response = await api.get(apiUrls.getAllMessages);

				this.newMessages = response.data;
				this.message = response.message;
			} catch (error) {
				this.message = getErrorMessage(error);
				console.log("Error:", error);
			}
		},

		async markMessageAsProcessed(id) {
			const apiUrls = ApiUrls();
			const api = useApi();

			try {
				await api.put(apiUrls.updateNewMessages.replace(":id", id), {});
			} catch (error) {
				this.message = getErrorMessage(error);
				console.log("Error:", error);
			}
		},
	},
});