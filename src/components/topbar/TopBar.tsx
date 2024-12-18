"use client";

import {
  Box,
  Flex,
  Link as ChakraLink,
  Spacer,
  HStack,
} from "@chakra-ui/react";
import { ThemeSwitcher } from "@/components/topbar/ThemeSwitcher";
import { useTranslations } from "next-intl";
import LanguageSelector from "./LanguageSelector";

export const Topbar = () => {
  const t = useTranslations("TopBar");

  return (
    <Box as="header" px={4} py={2} boxShadow="sm">
      <Flex align="center">
        {/* Logo Placeholder */}
        <Box fontWeight="bold" fontSize="xl">
          Logo
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
          <ThemeSwitcher />
        </Box>
      </Flex>
    </Box>
  );
};
