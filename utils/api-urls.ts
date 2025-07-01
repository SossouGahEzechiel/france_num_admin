export const ApiUrls = {
	login: 'login',
	logout: 'logout',
	getConfigs: "contact-data",
	updateConfig: "contact-data",
	getNewMessages: "forms",
	profile: "auth/me",

	getAsUrl(pattern) {
		return "http://localhost:3001/api/" + pattern;
	},
};