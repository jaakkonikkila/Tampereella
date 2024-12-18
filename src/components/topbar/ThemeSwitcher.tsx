"use client";

import { IconButton } from "@chakra-ui/react";
import { useColorMode, ColorModeIcon } from "@/components/ui/color-mode";

export const ThemeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Toggle theme"
      onClick={toggleColorMode}
      variant="ghost" // Optional: Minimalistic styling
      size="lg" // Adjust size for better visibility
      color={colorMode === "light" ? "yellow.500" : "blue.500"} // Theme-based colors
    >
      <ColorModeIcon />
    </IconButton>
  );
};
