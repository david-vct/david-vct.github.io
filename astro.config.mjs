import { defineConfig, fontProviders } from "astro/config"

// Fonts of the home page. They are only loaded where a page renders their
// <Font> component, so they never reach the academic CV.
const latin =
	"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"

export default defineConfig({
	site: "https://david-vct.github.io",
	fonts: [
		{
			provider: fontProviders.local(),
			name: "Instrument Serif",
			cssVariable: "--font-serif",
			fallbacks: ["Georgia", "serif"],
			options: {
				variants: [
					{
						src: [
							"./node_modules/@fontsource/instrument-serif/files/instrument-serif-latin-400-normal.woff2",
						],
						weight: 400,
						style: "normal",
						unicodeRange: [latin],
					},
				],
			},
		},
		{
			provider: fontProviders.local(),
			name: "Geist",
			cssVariable: "--font-sans",
			fallbacks: ["Arial", "sans-serif"],
			options: {
				variants: [
					{
						src: [
							"./node_modules/@fontsource-variable/geist/files/geist-latin-wght-normal.woff2",
						],
						weight: "100 900",
						style: "normal",
						unicodeRange: [latin],
					},
				],
			},
		},
		{
			provider: fontProviders.local(),
			name: "Geist Mono",
			cssVariable: "--font-mono",
			fallbacks: ["Courier New", "monospace"],
			options: {
				variants: [
					{
						src: [
							"./node_modules/@fontsource-variable/geist-mono/files/geist-mono-latin-wght-normal.woff2",
						],
						weight: "100 900",
						style: "normal",
						unicodeRange: [latin],
					},
				],
			},
		},
	],
})
