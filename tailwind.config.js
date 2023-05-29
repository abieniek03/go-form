/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts}'],
	theme: {
		extend: {
			colors: {
				background: '#0C0C0C',
				'background-input': '#0F0F0F',
				primary: '#BF2B2B',
				'primary-hover': '#AE1A1A',
				content: '#fff',
				border: '#2c2c2c',
			},
		},
	},
	plugins: [],
};
