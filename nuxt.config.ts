// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    srcDir: "src",
    modules: [
        "@nuxtjs/tailwindcss",
        "@nuxtjs/color-mode",
        "shadcn-nuxt",
        "@nuxt/image",
        "@nuxt/fonts",
        "@nuxt/icon",
    ],
    css: ["@/css/globals.css"],
    app: {
        head: {
            link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
        },
    },
});
