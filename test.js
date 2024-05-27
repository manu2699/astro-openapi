import OpenAPIParser from "@readme/openapi-parser";

try {
	console.info(`Parsing OpenAPI schema.`);

	const document = await OpenAPIParser.bundle("./openapi.json");

	console.log({ document });
} catch (error) {
	if (error) {
		console.error(error.message);
	}
	throw error;
}
