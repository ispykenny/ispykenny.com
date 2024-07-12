const { fontFamily, colors } = require('tailwindcss/defaultTheme');

import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./templates/**/*.{js,ts,jsx,tsx,mdx}',
		'./modules/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-catamaran)', ...fontFamily.sans],
			},
			colors: {
				'primary-color': 'var(--primary-color)',
				'secondary-color': 'var(--secondary-color)',
				'brand-color': 'var(--brand-color)',
				'offset-color': 'var(--offset-color)',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
export default config;
