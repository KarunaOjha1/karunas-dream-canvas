import { defineConfig } from "@lovable-dev/vite-tanstack-config";

export default defineConfig({
  base: '/karunas-dream-canvas/',
  tanstackStart: {
    server: { entry: "server" },
  },
});
