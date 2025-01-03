import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

export default {
	content: ["index.html", "src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			...colors,
			"retro-brown-dark-one": "#8b7355",
			"retro-brown-dark-two": "#7a6353",
			"retro-brown-light-one": "#e6d9c2",
			"retro-brown-light-two": "#f0e6d2",
		},
		extend: {},
	},
	plugins: [],
} satisfies Config;
