import {defineStore} from "pinia";

export const useAdminStore = defineStore("AdminStore", {
	state: () => ({
		administrators: [],
		message: "",
		newAdministrator: {},
		isSuccess: true
	}),
	actions: {
		async getAdministrators() {
			try {
				const api = useApi();
				const apiUrls = ApiUrls();

				const response = await api.get(apiUrls.getAllAdministrators);

				this.administrators = response.data;
				this.message = response.message;
				this.isSuccess = true;
			} catch (error) {
				this.message = getErrorMessage(error);
				this.isSuccess = false;
			}
		},

		async add(data) {
			try {
				const api = useApi();
				const apiUrls = ApiUrls();

				const response = await api.post(apiUrls.addAdministrator, data);

				this.newAdministrator = response.data;
				this.message = response.message;
				this.isSuccess = true;
				console.log("newAdministrator:", this.newAdministrator);
				console.log("response.data:", response.data);
			} catch (error) {
				this.message = getErrorMessage(error);
				this.isSuccess = false;
			}
		},

		async updateAccess(adminId) {
			const api = useApi();
			const apiUrls = ApiUrls();
			try {
				const response = await api.put(apiUrls.updateAccess.replace(":id", adminId), {});
				this.message = response.message;
				this.isSuccess = true;
			} catch (error) {
				this.message = getErrorMessage(error);
				this.isSuccess = false;
			}
		},

		async delete(adminId) {
			const api = useApi();
			const apiUrls = ApiUrls();
			try {
				const response = await api.delete(apiUrls.deleteAdministrator.replace(":id", adminId), {});
				this.message = response.message;
				this.isSuccess = true;
			} catch (error) {
				this.message = getErrorMessage(error);
				this.isSuccess = false;
			}
		},
	},
});