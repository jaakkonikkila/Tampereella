"use server";

import {
  Box,
  Flex,
  Link as ChakraLink,
  Spacer,
  HStack,
} from "@chakra-ui/react";
import { ColorModeButton } from "@/components/ui/color-mode";
import { getTranslations } from "next-intl/server";
import LanguageSelector from "./LanguageSelector";
import ClientLogo from "./ClientLogo";
import Drawer from "./Drawer";

export const Topbar = async () => {
  const t = await getTranslations("TopBar");

  return (
    <Box
      as="header"
      className="topbar"
      px={{ base: 1, lg: 6 }}
      py={2}
      top={0}
      left={0}
      width="100%"
      zIndex="sticky"
    >
      <Flex align="center">
        {/* Logo Section */}
        <ChakraLink href="/" maxWidth="200px" flexShrink={0} outline="none">
          <ClientLogo />
        </ChakraLink>

        <Spacer />

        {/* Navigation Links */}
        <HStack
          as="nav"
          fontSize="md"
          fontWeight="medium"
          display={{ base: "none", lg: "flex" }}
        >
          <ChakraLink href="/food" outline="none">{t("food")}</ChakraLink>
          <ChakraLink href="/accommodation" outline="none">{t("accommodation")}</ChakraLink>
          <ChakraLink href="/sights" outline="none">{t("sights")}</ChakraLink>
          <ChakraLink href="/activities" outline="none">{t("activities")}</ChakraLink>
          <ChakraLink href="/sports" outline="none">{t("sports")}</ChakraLink>
        </HStack>

        <Spacer />

        {/* Drawer only shows on small screens (mobile) */}
        <Drawer />
        {/* Language Selector */}
        <Box ml={4} display={{ base: "none", lg: "flex" }}>
          <LanguageSelector />
        </Box>
        {/* Theme Switcher */}
        <Box ml={4} display={{ base: "none", lg: "flex" }}>
          <ColorModeButton />
        </Box>
      </Flex>
    </Box>
  );
};
