import {defineStore} from "pinia";
import getErrorMessage from "~/utils/get-error-message.js";
import {ApiUrls} from "~/composables/api-urls.js";
import {useApi} from "~/composables/use-api.js";


export const useNewMessagesStore = defineStore("NewMessagesStore", {
	state: () => ({
		newMessages: [],
		message: "",
		// status: "",
	}),

	actions: {
		async getNewMessages() {
			const apiUrls = ApiUrls();
			const api = useApi();

			try {
				const response = await api.get(apiUrls.getNewMessages)

				this.newMessages = response.data;
				this.message = response.message;
			} catch (error) {
				this.message = getErrorMessage(error);
				console.log("Error:", error);
			}
		},
	},
});