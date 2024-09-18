module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extends: {},
		fontFamily: {
			// inter: ['inter', 'sans-serif'],
			// poppins: ['poppins', 'serif'],
			// 'fira-mono': ['fira-mono']
		}
  },
  // , require('daisyui')
	plugins: [require('@tailwindcss/typography')],
	// daisyUI config (optional)
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#661AE6',
					secondary: '#D926AA',
					accent: '#5AB034', // eco
					neutral: '#191D24',
					info: '#3ABFF8',
					success: '#36D399',
					warning: '#FBBD23',
					error: '#F87272'
				}
			}
		]
	}
};
