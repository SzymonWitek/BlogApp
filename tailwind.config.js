/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/features/**/*.{ts,tsx}',
	],
	theme: {
		colors: {
			textPrimary: '#fff',
			textSecondary: '#a9adc1',
			yellow: '#ffd644',
			yellowInverted: '#a08600',
			black: '#000',
			white: '#fff',
			bgPrimary: '#1f2028',
			bgSecondary: '#2e3039',
			'blue-100': '#e8f2ff',
			'blue-500': '#4b96ff',
			'slate-500': '#a9adc1',
			'gray-100': '#f7f7f7',
			'gray-200': '#e6e9ee',
			'gray-300': '#dde0e4',
			'gray-400': '#818890',
			'gray-500': '#535661',
			'gray-600': '#4b4c53',
			'gray-700': '#3a3d4a',
			'gray-800': '#2e3039',
			'gray-900': '#1f2028',
			'green-100': '#e7f9ed',
			'green-500': '#30c85e',
			'green-600': '#68d94a',
		},
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [],
};
