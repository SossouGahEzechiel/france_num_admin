import {defineStore} from "pinia";

export const useDashboardStore = defineStore('dashboard', {
	state: () => ({
		data: {
			administratorsCount: 0,
			messagesCount: 0,
		},
		message: "",
		isSuccess: true
	}),

	actions: {
		async get() {
			const api = useApi();
			const apiUrls = ApiUrls();

			try {
				const response = await api.get(apiUrls.dashboard);

				this.data = response.data;
				this.message = response.message;
				this.isSuccess = true;
			} catch (error) {
				this.message = getErrorMessage(error);
				this.isSuccess = false;
			}
		}
	}
})
