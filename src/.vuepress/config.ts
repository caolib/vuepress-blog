import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import path from "path";

export default defineUserConfig({
  base: "/",

  locales: {
    "/en/": {
      lang: "en-US",
      title: "Blog Demo",
      description: "A blog demo for vuepress-theme-hope",
    },
    "/": {
      lang: "zh-CN",
      title: "",
      description: "生活不简单,尽量简单过",
    },
  },

  theme,
  alias: {
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/BlogHero.vue",
    ),
  },

  // Enable it with pwa
  // shouldPrefetch: false,
});
