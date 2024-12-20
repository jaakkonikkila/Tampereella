"use server";

import { getTranslations } from "next-intl/server";
import { Center, Heading, Text, VStack } from "@chakra-ui/react";

const HomePage = async () => {
  const t = await getTranslations("Homepage");

  return (
    <Center minHeight="80vh">
      <VStack gap={4}>
        <Heading>{t("title")}</Heading>
        <Text maxWidth="70%" textAlign="center">
          {t("description")}
        </Text>
      </VStack>
    </Center>
  );
};

export default HomePage;
