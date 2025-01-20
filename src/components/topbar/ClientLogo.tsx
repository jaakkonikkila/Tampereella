"use client";

import { useColorMode } from "@/components/ui/color-mode";
import { ClientOnly, Skeleton, Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

const ClientLogo = () => {
  const { colorMode } = useColorMode();

  const logoSrc =
    colorMode === "dark"
      ? "/tampereella-logo-white.png"
      : "/tampereella-logo-black.png";

  return (
    // Clientside only component so we can change the logo based on the color mode
    <ClientOnly
      fallback={
        <Skeleton>
          <Box width="177px" mt="-2" height="49px"></Box>
        </Skeleton>
      }
    >
      <Image
        src={logoSrc}
        alt="Tampereella"
        objectFit="contain"
        boxSize="100%"
        maxH="50px" // Limits the logo height
        mt="-2"
      />
    </ClientOnly>
  );
};

export default ClientLogo;
