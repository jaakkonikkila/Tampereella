"use client";

import { NextIntlClientProvider, IntlErrorCode } from "next-intl";
import type { AbstractIntlMessages } from "next-intl";

export default function IntlClientProviderWrapper({
  children,
  messages,
  locale,
  now,
  timeZone,
}: {
  children: React.ReactNode;
  messages: AbstractIntlMessages;
  locale: string;
  now: Date;
  timeZone: string;
}) {
  return (
    <NextIntlClientProvider
      messages={messages}
      onError={(error) => {
        if (error.code === IntlErrorCode.MISSING_MESSAGE) {
          // Missing translations are expected and should be ignored
          return;
        } else {
          // Other errors indicate a bug in the app and should be reported
          console.log(error.message);
        }
      }}
      getMessageFallback={({ key }) => `${key}`} // Fallback to the key if the translation is missing
      locale={locale}
      now={now}
      timeZone={timeZone}
    >
      {children}
    </NextIntlClientProvider>
  );
}
