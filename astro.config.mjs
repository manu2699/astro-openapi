import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightOpenAPI, { openAPISidebarGroups } from "starlight-openapi";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	output: "server", // or 'server'
	experimental: {
		actions: true
	},
	integrations: [
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
						schema: "./schemas/case.json"
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
		}),
		react(),
		tailwind()
	]
});
