/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		fontFamily: {
			'serif': ['DM Serif Display', 'serif'],
			'serif-sc': ['Playfair Display SC', 'serif'],
			'sans': ['Lato', 'sans-serif']
		}
	},
	plugins: [],
}
