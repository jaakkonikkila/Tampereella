"use client";

import { useColorMode } from "@/components/ui/color-mode";
import { ClientOnly, Skeleton, Box } from "@chakra-ui/react";
import Image from "next/image";

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
          <Box width="200px" height="55px"></Box>
        </Skeleton>
      }
    >
      <Image
        src={logoSrc}
        alt="Tampereella"
        width={200} // Fixed width for the image (matches Chakra's box size)
        height={50} // Fixed height for the image (matches Chakra's box size)
        objectFit="contain" // Keep the aspect ratio while fitting the container
      />
    </ClientOnly>
  );
};

export default ClientLogo;
