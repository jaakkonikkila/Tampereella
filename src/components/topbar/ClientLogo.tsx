"use client";

import { useEffect, useState } from "react";
import { useColorMode } from "@/components/ui/color-mode";
import { Image } from "@chakra-ui/react";

const ClientLogo = () => {
  const { colorMode } = useColorMode();
  const [filter, setFilter] = useState("invert(0)");

  useEffect(() => {
    setFilter(colorMode === "dark" ? "invert(1)" : "invert(0)");
  }, [colorMode]);

  return (
    <Image
      src="/tampereella-logo.png"
      alt="Tampereella"
      objectFit="contain"
      boxSize="100%"
      maxH="50px" // Limits the logo height
      mt="-2"
      style={{ filter }}
    />
  );
};

export default ClientLogo;
