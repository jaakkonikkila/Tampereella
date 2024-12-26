import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  globalCss: {
    ".topbar": {
      _light: {
        bgColor: "var(--background-light)",
        color: "var(--foreground-light)",
      },
      _dark: {
        bgColor: "var(--background-dark)",
        color: "var(--foreground-dark)",
      },
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      zIndex: "1000", // Ensure it stays on top
      position: "fixed",
      width: "100%",
      top: "0",
      left: "0",
    },
    ":root": {
      "--background-light": "#ffffff", // Default for light mode
      "--foreground-light": "#171717", // Default for light mode
      "--background-dark": "#0a0a0a", // Default for dark mode
      "--foreground-dark": "#ededed", // Default for dark mode
    },
  },
});

export const system = createSystem(defaultConfig, config);
