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
    <ClientOnly
      fallback={
        <Skeleton>
          <Box minWidth="190px" mt="-2" minHeight="40px"></Box>{" "}
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
