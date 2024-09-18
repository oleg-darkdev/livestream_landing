import { get } from 'svelte/store';
import { themeStore, setTheme } from '$shared';

const toggleTheme = () => {
	if (get(themeStore).theme === 'light') {
		setTheme('dark');
	} else {
		setTheme('light');
	}
};
export default toggleTheme;
