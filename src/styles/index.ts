import { createStitches } from "@stitches/react";

export const {
	config,
	styled,
	css,
	globalCss,
	keyframes,
	getCssText,
	theme,
	createTheme,
	prefix,
	reset
} = createStitches({
	theme: {
		colors: {
			"text-base": "#afb6c2",
			"text-title": "#d4ccb6",
			background: "#191816",
			"form-background": "#24221f",
			"primary-color": "#ffc632",
			"primary-color-text": "#473404",
			"border-color": "#868686"
		},
		fontSizes: {
			md: "1.125rem",
			lg: "1.25rem",
			xl: "1.5rem",
			"2xl": "2rem"
		}
	},
	media: {
		sm: "(max-width: 640px)",
		md: "(max-width: 768px)",
		lg: "(max-width: 992px)",
		xl: "(max-width: 1280px)"
	}
});
