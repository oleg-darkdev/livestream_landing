const getTheme = (key: string, fallback?: string): string | undefined => {
	if (typeof window === 'undefined') return undefined;
	let theme;
	try {
		theme = localStorage.getItem(key) || undefined;
	} catch (e) {
		// Unsupported
	}
	return theme || fallback;
};


export default getTheme