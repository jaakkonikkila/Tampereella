"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import { IconButton } from "@chakra-ui/react";
import { Tooltip } from "@/components/ui/tooltip";
import Flag from "react-world-flags";
import { useLocale } from "next-intl";

const LanguageSelector = () => {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();

  const handleLanguageChange = (locale: string) => {
    router.replace(pathname, { locale });
  };

  return (
    <Tooltip
      content={locale === "fi" ? "Change to English" : "Vaihda suomeksi"}
    >
      <IconButton
        aria-label="Change language"
        background="transparent" // Makes the background transparent
        onClick={() => handleLanguageChange(locale === "fi" ? "en" : "fi")}
      >
        <Flag code={locale === "fi" ? "FI" : "GB"} width="30px" height="25px" />
      </IconButton>
    </Tooltip>
  );
};

export default LanguageSelector;
