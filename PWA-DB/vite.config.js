import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
    plugins: [
        vue(),
        VitePWA({
            registerType: "prompt",
            useCredentials: true,
            devOptions: {
                enabled: true,
            },
            manifest: {
                name: "DBPWA",
                short_name: "Gestión Clientes DB",
                description: "PWA para gestión de clientes de Disbattery",
                theme_color: "#F0F0F3",
                background_color: "#F0F0F3",
                display: "standalone",
                icons: [
                    {
                        src: "/image-192x192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                    {
                        src: "/image-512x512.png",
                        sizes: "512x512",
                        type: "image/png",
                    },
                    {
                        src: "/image-512x512.png",
                        sizes: "512x512",
                        type: "image/png",
                        purpose: "any maskable",
                    },
                ],
            },
        }),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    server: {
        port: 3000,
        host: true,
        allowedHosts: true,
    },
    preview: {
        port: 3000,
        host: true,
        allowedHosts: true,
    },
});
