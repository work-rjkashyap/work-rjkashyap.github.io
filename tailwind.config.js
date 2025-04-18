const colors = require('tailwindcss/colors');
module.exports = {
	darkMode: 'class',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		colors: {
			dark: '#16213E',
			light: '#EFFFFD',
			primary: '#354259',
			secondary: '#EEEEEE',
			border: '#292C6D',
			borderDark: '#344CB7',
			hoverDark: '#01ffee',
			hoverLight: '#f50839',
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			gray: colors.gray,
			emerald: colors.emerald,
			indigo: colors.indigo,
			yellow: colors.yellow,
		},
		extend: {},
	},
	plugins: [],
};
