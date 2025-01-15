import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  globalCss: {
    ":root": {
      "--background-light": "#f0f0f0", // Default for light mode
      "--foreground-light": "#171717", // Default for light mode
      "--background-dark": "#0B0C10" /* Charcoal black */,
      "--foreground-dark": "#ededed", // Default for dark mode
    },
    "html, body": {
      _light: {
        bgColor: "var(--background-light)",
        color: "var(--foreground-light)",
      },
      _dark: {
        bgColor: "var(--background-dark)",
        color: "var(--foreground-dark)",
      },
      transition: "background-color 1s ease, color 1s ease", // Smooth transition for theme switching
    },
    ".card": {
      _light: {
        bgColor: "#F5F5F5 !important)",
      },
    },
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
    },
  },
});

export const system = createSystem(defaultConfig, config);
