import vituum from "vituum";
import posthtml from "@vituum/vite-plugin-posthtml";
import components from "posthtml-component";
import inlineSvg from "posthtml-inline-svg";
import tailwindcss from "@vituum/vite-plugin-tailwindcss";

export default {
  base: "./",
  plugins: [
    vituum(),
    posthtml({
      root: "./src",
      plugins: [
        components({
          root: "./src",
          tagPrefix: "c-",
          folders: ["components", "layouts"],
        }),
        inlineSvg({
          root: "./public/svg",
          tagPrefix: "i-",
        }),
      ],
    }),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "assets/[name].js",
        chunkFileNames: "assets/[name].js",
        assetFileNames: "assets/[name].[ext]",
      },
    },
  },
};
