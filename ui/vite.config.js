import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@data": "/src/data",
        "@common": "/src/components/common",
        "@components": "/src/components",
        "@form": "/src/components/form",
        "@navigation": "/src/components/navigation",
        "@home": "/src/components/home",
        "@view": "/src/views",
        "@translate": "/src/translate",
        "@hooks": "/src/hooks",
        "@redux": "/src/modules",
      },
    },
  };
});
