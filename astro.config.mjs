import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightOpenAPI, {
	openAPISidebarGroups
} from "starlight-openapi-rapidoc";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
	output: "server",
	experimental: {
		actions: true
	},
	adapter: vercel({
		webAnalytics: { enabled: true }
	}),
	integrations: [
		react(),
		tailwind(),
		starlight({
			title: "API Docs",
			social: {
				github: "https://github.com/withastro/starlight"
			},
			plugins: [
				starlightOpenAPI([
					{
						base: "case",
						label: "Case API",
						schema: "./schemas/case.json",
						showMethodBadgeSidebar: true
					},
					{
						base: "process",
						label: "Process API",
						schema: "./schemas/process.json"
					},
					{
						base: "form",
						label: "Form API",
						schema: "./schemas/form.json"
					}
				])
			],
			sidebar: [
				{
					label: "Playground",
					link: "/playground"
				},
				...openAPISidebarGroups
			]
		})
	]
});
