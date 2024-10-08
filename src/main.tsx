import { DataProvider } from "@providers";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<DataProvider>
			<App />
			<SpeedInsights />
			<Analytics />
		</DataProvider>
	</React.StrictMode>,
);
