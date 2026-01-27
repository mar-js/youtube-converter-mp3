import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

export default {
	content: ["index.html", "src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				neonPink: "#ff00cc",
				neonBlue: "#00eaff",
				neonGreen: "#39ff14",
				neonYellow: "#fff700",
				neonPurple: "#a259ff",
				neonOrange: "#ff9900",
				backgroundDark: "#18181b",
			},
			fontFamily: {
				futuristic: ["Orbitron", "Montserrat", "Arial", "sans-serif"],
			},
			boxShadow: {
				neon: "0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 30px #39ff14, 0 0 40px #39ff14",
				neonPink: "0 0 10px #ff00cc, 0 0 20px #ff00cc, 0 0 30px #ff00cc",
				neonBlue: "0 0 10px #00eaff, 0 0 20px #00eaff, 0 0 30px #00eaff",
			},
			textShadow: {
				neon: "0 0 5px #fff, 0 0 10px #39ff14, 0 0 20px #39ff14",
			},
		},
	},
	plugins: [],
} satisfies Config;
