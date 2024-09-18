import { themeStore } from '$shared';

const setTheme = (theme: string): void => themeStore.update((store) => ({ ...store, theme }));

export default setTheme;
