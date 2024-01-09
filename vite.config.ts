import { defineConfig } from "vite";
import Userscript from "vite-userscript-plugin";
import { name, version } from "./package.json";

export default defineConfig((config) => {
	return {
		plugins: [
			Userscript({
				entry: "src/index.ts",
				header: {
					name,
					namespace: "https://savagecore.uk",
					version,
					description:
						"Add a link to the Point Shop of the current users background to their profile page.",
					author: "SavageCore",
					match: [
						"https://steamcommunity.com/profiles/*",
						"https://steamcommunity.com/id/*",
					],
					require: [
						"https://greasemonkey.github.io/gm4-polyfill/gm4-polyfill.js",
					],
					"run-at": "document-idle",
				},
				server: {
					port: 2000,
				},
			}),
		],
	};
});
