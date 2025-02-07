"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import { IconButton } from "@chakra-ui/react";
import { Tooltip } from "@/components/ui/tooltip";
import Image from "next/image";
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
        <Image
          src={`https://flagcdn.com/w40/${locale === "fi" ? "fi" : "gb"}.png`}
          alt="Language Flag"
          width={30}
          height={30}
        />
      </IconButton>
    </Tooltip>
  );
};

export default LanguageSelector;
