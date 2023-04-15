/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./src/app/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		colors: {
			sp: {
				text: '#b3b3b3',
				highlight: '#ffffff',
				green: '#1ed760',
				500: '#282828',
				600: '#181818',
				700: '#121212',
				900: '#000000',
			},
		},
	},
	plugins: [],
};
