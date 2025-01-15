"use server";

import { getTranslations } from "next-intl/server";
import { Flex, Heading, Text, VStack } from "@chakra-ui/react";

const HomePage = async () => {
  const t = await getTranslations("Homepage");

  return (
    <Flex
      flex="1"
      mt="-10"
      className="Homescreen"
      direction="column"
      justify="center"
    >
      <VStack gap={4} textAlign="center" overflow="hidden">
        <Heading size={{ base: "xl", md: "2xl", lg: "4xl", "2xl": "5xl" }}>
          {t("title")}
        </Heading>
        <Text textAlign="center" maxW="80rem">
          {t("description")}
        </Text>
      </VStack>
    </Flex>
  );
};

export default HomePage;
