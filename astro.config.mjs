import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://www.neurinlab.com",
  devToolbar: {
    enabled: false
  },
  output: "static",
  trailingSlash: "always"
});
