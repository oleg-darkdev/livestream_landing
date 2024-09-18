// copied from https://github.com/beynar/svelte-themes/blob/main/src/lib/helpers.ts
import { MEDIA } from '$shared';

const getSystemTheme = (e?: MediaQueryList): string => {
	if (!e) {
		e = window.matchMedia(MEDIA);
	}

	const isDark = e.matches;
	const systemTheme = isDark ? 'dark' : 'light';
	return systemTheme;
};



export default getSystemTheme;
