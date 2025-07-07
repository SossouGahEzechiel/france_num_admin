export const ApiUrls = () => {
	return {
		dashboard: '/dashboard',

		login: `/auth/login`,
		logout: `/auth/logout`,
		refreshData: `/auth/refresh-data`,

		getConfigs: `/contact-data`,
		updateConfig: `/contact-data`,

		getNewMessages: `/forms/news`,
		getAllMessages: `/forms`,
		updateNewMessages: `/forms/:id`,
		getOldMessages: "/forms/old",

		getAllAdministrators: "/users",
		addAdministrator: "/users",
		updateAccess: "/users/:id",
		deleteAdministrator: "/users/:id",
	};
}