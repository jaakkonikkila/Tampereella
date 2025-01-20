"use client";

import { Button } from "@/components/ui/button";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerRoot,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { VStack, HStack, Link as ChakraLink } from "@chakra-ui/react";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { FaBars } from "react-icons/fa";
import LanguageSelector from "./LanguageSelector";
import { ColorModeButton } from "@/components/ui/color-mode";

const Drawer = () => {
  const [open, setOpen] = useState(false);
  const t = useTranslations("TopBar");

  return (
    <DrawerRoot
      open={open}
      placement="top"
      onOpenChange={(e) => setOpen(e.open)}
    >
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <Button
          size="md"
          variant="ghost"
          display={{ base: "block", lg: "none" }}
        >
          <FaBars />
        </Button>
      </DrawerTrigger>
      <DrawerContent rounded="md" offset="14">
        <DrawerHeader
          bgColor={{ _light: "var(--background-light)" }}
        ></DrawerHeader>
        <DrawerBody mt="-6" bgColor={{ _light: "var(--background-light)" }}>
          {/* Navigation Links */}
          <VStack as="nav" fontSize="lg" gap="5" fontWeight="medium">
            <ChakraLink href="/food" outline="none">
              {t("food")}
            </ChakraLink>
            <ChakraLink href="/accommodation" outline="none">
              {t("accommodation")}
            </ChakraLink>
            <ChakraLink href="/sights" outline="none">
              {t("sights")}
            </ChakraLink>
            <ChakraLink href="/activities" outline="none">
              {t("activities")}
            </ChakraLink>
            <ChakraLink href="/events" outline="none">
              {t("events")}
            </ChakraLink>
            <HStack gap="5">
              <LanguageSelector />
              <ColorModeButton />
            </HStack>
          </VStack>
        </DrawerBody>
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  );
};

export default Drawer;
