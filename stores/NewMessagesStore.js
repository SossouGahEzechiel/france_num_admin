import {defineStore} from "pinia";
import {ApiUrls} from "~/utils/api-urls.js";
import getErrorMessage from "~/utils/get-error-message.js";

export const useNewMessagesStore = defineStore("NewMessagesStore", {
	state: () => ({
		newMessages: [],
		message: "",
		status: "",
	}),
	
	actions: {
		async getNewMessages() {
			
			try {
				const response = await $fetch(ApiUrls.getAsUrl(ApiUrls.getNewMessages));

				this.newMessages = response.data;
				this.message = response.message;
			}catch (e) {
				this.message = getErrorMessage(error);
				console.log("Error:", e);
			}
		},
	},
});