"use server";

import { Box, Flex, Text, Link, IconButton } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { getTranslations } from "next-intl/server";

const Footer = async () => {
  const t = await getTranslations("Footer");

  return (
    <Box as="footer" py="2" px={{ base: 1, lg: 6 }} boxShadow="sm" width="100%">
      <Flex
        direction={{ base: "column", lg: "row" }}
        align="center"
        justify="space-between"
        maxW="100%"
        position="relative" // Add relative positioning for the center text
      >
        {/* Copyright Section - Left side */}
        <Text fontSize="sm" textAlign={{ base: "center", lg: "left" }}>
          © {new Date().getFullYear()} Tampereella
        </Text>

        {/* About Website Section - Centered */}
        <Text
          fontSize="sm"
          px="2"
          textAlign="center"
          position={{ lg: "absolute" }} // Adjust positioning for mobile
          left={{ lg: "50%" }} // Only center on larger screens
          transform={{ lg: "translateX(-50%)" }} // Only apply translate for larger screens
          mt={{ base: 2, lg: 0 }} // Add top margin for mobile, remove on larger screens
        >
          {t("aboutwebsite")}
        </Text>

        {/* Website Made With and GitHub Link - Right side */}
        <Flex align="center" justify={{ base: "center", lg: "flex-end" }}>
          <Text fontSize="sm">{t("websitemadewith")}</Text>
          <Link
            href="https://github.com/jaakkonikkila/tampereella"
            target="_blank"
          >
            <IconButton
              aria-label="Github"
              variant="ghost"
              _hover={{ bg: "gray.700" }}
            >
              <FaGithub />
            </IconButton>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
