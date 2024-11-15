import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    server: {
        proxy: {
            "/.netlify/functions": "http://localhost:9999",
        },
    },
    plugins: [react()],
})