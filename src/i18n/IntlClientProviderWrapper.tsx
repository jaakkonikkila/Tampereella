"use client";

import { NextIntlClientProvider, IntlErrorCode } from "next-intl";

export default function IntlClientProviderWrapper({
  children,
  messages,
  locale,
  now,
    timeZone,
}: {
  children: React.ReactNode;
  messages: any;
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
      getMessageFallback={({ key }) => `${key}`}
      locale={locale}
      now={now}
      timeZone={timeZone}
    >
      {children}
    </NextIntlClientProvider>
  );
}
