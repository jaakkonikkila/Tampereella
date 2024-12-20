"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Link as ChakraLink,
  Spacer,
  HStack,
  Image,
} from "@chakra-ui/react";
import { ColorModeButton, useColorMode } from "@/components/ui/color-mode";
import { useTranslations } from "next-intl";
import LanguageSelector from "./LanguageSelector";

export const Topbar = () => {
  const t = useTranslations("TopBar");
  const { colorMode } = useColorMode();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // This is used for the logo color inversion to make it happen after the component has been mounted
  }, []);

  return (
    <Box as="header" px={6} py={2} boxShadow="sm">
      <Flex align="center">
        {/* Logo Section */}
        <Box maxWidth="200px" flexShrink={0}>
          <Image
            src="/tampereella-logo.png"
            alt="Tampereella"
            objectFit="contain"
            boxSize="100%"
            maxH="50px" // Limits the logo height
            mt="-2"
            style={{
              filter: isMounted
                ? colorMode === "dark"
                  ? "invert(1)"
                  : "invert(0)"
                : undefined,
            }}
          />
        </Box>

        <Spacer />

        {/* Navigation Links */}
        <HStack as="nav" fontSize="md" fontWeight="medium">
          <ChakraLink href="/food">{t("food")}</ChakraLink>
          <ChakraLink href="/sports">{t("sports")}</ChakraLink>
          <ChakraLink href="/accommodation">{t("accommodation")}</ChakraLink>
          <ChakraLink href="/sights">{t("sights")}</ChakraLink>
          <ChakraLink href="/activities">{t("activities")}</ChakraLink>
        </HStack>

        <Spacer />

        {/* Language Selector */}
        <Box ml={4}>
          <LanguageSelector />
        </Box>
        {/* Theme Switcher */}
        <Box ml={4}>
          <ColorModeButton />
        </Box>
      </Flex>
    </Box>
  );
};
