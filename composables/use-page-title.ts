export const usePageTitle = (title: string): void => {
	useHead({
		title: title,
		titleTemplate: (titleChunk: string | undefined): string => titleChunk ? `${titleChunk} - MSS Admin` : 'MSS Admin'
	});
};