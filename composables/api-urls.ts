export const ApiUrls = () => {
	const configs = useRuntimeConfig();
	const apiBase = "http://localhost:3001/api";
	// const apiBase = configs.public.apiBase;
	console.log("apiBase:", apiBase);
	return {
		login: `${apiBase}/auth/login`,
		logout: `${apiBase}/auth/logout`,
		refreshData: `${apiBase}/auth/refresh-data`,

		getConfigs: `${apiBase}/contact-data`,
		updateConfig: `${apiBase}/contact-data`,
		getNewMessages: `${apiBase}/forms`,
	};
}