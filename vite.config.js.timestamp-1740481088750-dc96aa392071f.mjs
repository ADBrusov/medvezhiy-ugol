// vite.config.js
import vituum from "file:///D:/projects/Frontend/medvezhiy-ugol/node_modules/vituum/src/index.js";
import posthtml from "file:///D:/projects/Frontend/medvezhiy-ugol/node_modules/@vituum/vite-plugin-posthtml/index.js";
import components from "file:///D:/projects/Frontend/medvezhiy-ugol/node_modules/posthtml-component/src/index.js";
import inlineSvg from "file:///D:/projects/Frontend/medvezhiy-ugol/node_modules/posthtml-inline-svg/index.js";
import tailwindcss from "file:///D:/projects/Frontend/medvezhiy-ugol/node_modules/@vituum/vite-plugin-tailwindcss/index.js";
var vite_config_default = {
  base: "./",
  plugins: [
    vituum(),
    posthtml({
      root: "./src",
      plugins: [
        components({
          root: "./src",
          tagPrefix: "c-",
          folders: ["components", "layouts"]
        }),
        inlineSvg({
          root: "./public/svg",
          tagPrefix: "i-"
        })
      ]
    }),
    tailwindcss()
  ],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "assets/[name].js",
        chunkFileNames: "assets/[name].js",
        assetFileNames: "assets/[name].[ext]"
      }
    }
  }
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxwcm9qZWN0c1xcXFxGcm9udGVuZFxcXFxtZWR2ZXpoaXktdWdvbFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxccHJvamVjdHNcXFxcRnJvbnRlbmRcXFxcbWVkdmV6aGl5LXVnb2xcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L3Byb2plY3RzL0Zyb250ZW5kL21lZHZlemhpeS11Z29sL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHZpdHV1bSBmcm9tIFwidml0dXVtXCI7XHJcbmltcG9ydCBwb3N0aHRtbCBmcm9tIFwiQHZpdHV1bS92aXRlLXBsdWdpbi1wb3N0aHRtbFwiO1xyXG5pbXBvcnQgY29tcG9uZW50cyBmcm9tIFwicG9zdGh0bWwtY29tcG9uZW50XCI7XHJcbmltcG9ydCBpbmxpbmVTdmcgZnJvbSBcInBvc3RodG1sLWlubGluZS1zdmdcIjtcclxuaW1wb3J0IHRhaWx3aW5kY3NzIGZyb20gXCJAdml0dXVtL3ZpdGUtcGx1Z2luLXRhaWx3aW5kY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgYmFzZTogXCIuL1wiLFxyXG4gIHBsdWdpbnM6IFtcclxuICAgIHZpdHV1bSgpLFxyXG4gICAgcG9zdGh0bWwoe1xyXG4gICAgICByb290OiBcIi4vc3JjXCIsXHJcbiAgICAgIHBsdWdpbnM6IFtcclxuICAgICAgICBjb21wb25lbnRzKHtcclxuICAgICAgICAgIHJvb3Q6IFwiLi9zcmNcIixcclxuICAgICAgICAgIHRhZ1ByZWZpeDogXCJjLVwiLFxyXG4gICAgICAgICAgZm9sZGVyczogW1wiY29tcG9uZW50c1wiLCBcImxheW91dHNcIl0sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgaW5saW5lU3ZnKHtcclxuICAgICAgICAgIHJvb3Q6IFwiLi9wdWJsaWMvc3ZnXCIsXHJcbiAgICAgICAgICB0YWdQcmVmaXg6IFwiaS1cIixcclxuICAgICAgICB9KSxcclxuICAgICAgXSxcclxuICAgIH0pLFxyXG4gICAgdGFpbHdpbmRjc3MoKSxcclxuICBdLFxyXG4gIGJ1aWxkOiB7XHJcbiAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgIG91dHB1dDoge1xyXG4gICAgICAgIGVudHJ5RmlsZU5hbWVzOiBcImFzc2V0cy9bbmFtZV0uanNcIixcclxuICAgICAgICBjaHVua0ZpbGVOYW1lczogXCJhc3NldHMvW25hbWVdLmpzXCIsXHJcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6IFwiYXNzZXRzL1tuYW1lXS5bZXh0XVwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW1TLE9BQU8sWUFBWTtBQUN0VCxPQUFPLGNBQWM7QUFDckIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxlQUFlO0FBQ3RCLE9BQU8saUJBQWlCO0FBRXhCLElBQU8sc0JBQVE7QUFBQSxFQUNiLE1BQU07QUFBQSxFQUNOLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLFNBQVM7QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxRQUNQLFdBQVc7QUFBQSxVQUNULE1BQU07QUFBQSxVQUNOLFdBQVc7QUFBQSxVQUNYLFNBQVMsQ0FBQyxjQUFjLFNBQVM7QUFBQSxRQUNuQyxDQUFDO0FBQUEsUUFDRCxVQUFVO0FBQUEsVUFDUixNQUFNO0FBQUEsVUFDTixXQUFXO0FBQUEsUUFDYixDQUFDO0FBQUEsTUFDSDtBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsWUFBWTtBQUFBLEVBQ2Q7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLGVBQWU7QUFBQSxNQUNiLFFBQVE7QUFBQSxRQUNOLGdCQUFnQjtBQUFBLFFBQ2hCLGdCQUFnQjtBQUFBLFFBQ2hCLGdCQUFnQjtBQUFBLE1BQ2xCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjsiLAogICJuYW1lcyI6IFtdCn0K
