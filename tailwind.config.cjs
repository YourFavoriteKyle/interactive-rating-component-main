const defaultTheme = require('tailwindcss/defaultTheme');
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	mode: 'jit',

	theme: {
		screens: {
			mobile: '375px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			desktop: '1440px',
			'2xl': '1536px'
		},
		extend: {
			colors: {
				white: '#ffffff',
				primary: '#fb7413',
				'light-grey': '#959eac',
				'medium-grey': '#7c8798',
				'dark-blue': '#252d37',
				'very-dark-blue': '#121417',
				'modal-gradient-1': '#1f2630',
				'modal-gradient-2': '#171e28'
			},
			fontFamily: { sans: ['Overpass', ...defaultTheme.fontFamily.sans] }
		}
	},

	plugins: []
};

module.exports = config;
