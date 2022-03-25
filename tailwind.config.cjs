const defaultTheme = require('tailwindcss/defaultTheme');
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	mode: 'jit',

	theme: {
		extend: {
			screens: {
				mobile: '375px',
				desktop: '1440px'
			},
			colors: {
				white: '#ffffff',
				primary: '#fb7413',
				'light-grey': '#959eac',
				'medium-grey': '#7c8798',
				'dark-blue': '#252d37',
				'very-dark-blue': '#121417'
			},
			fontFamily: { sans: ['Overpass', ...defaultTheme.fontFamily.sans] }
		}
	},

	plugins: []
};

module.exports = config;
