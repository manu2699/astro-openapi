import { defineAction, z } from "astro:actions";

export const server = {
  fetch: defineAction({
    accept: "form",
    input: z.object({
      url: z.string().url(),
      "key-secret": z.string(),
      "key-id": z.string(),
    }),
    handler: async (data) => {
      try {
        const response = await fetch(data.url, {
          headers: {
            "X-Access-Key-Id": data["key-id"],
            "X-Access-Key-Secret": data["key-secret"],
          }
        });
        return await response.json();
      } catch (e) {
        console.log(e, "error");
        return e
      }
    }
  })
};