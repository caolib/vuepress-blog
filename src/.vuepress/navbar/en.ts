import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {
    text: "时间线",
    icon: "timeline",
    link: '/timeline/',
  },
  {
    text: "文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
