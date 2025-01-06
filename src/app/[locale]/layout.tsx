import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider";
import { Flex } from "@chakra-ui/react";
import IntlClientProviderWrapper from "@/i18n/IntlClientProviderWrapper";
import { getMessages, getNow, getTimeZone } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Topbar } from "@/components/topbar/TopBar";
import Footer from "@/components/footer/Footer";

// Ensure you pass metadata with your app
export const metadata: Metadata = {
  title: "Tampereella",
  description: "All you need to know when in Tampere",
};

// Asynchronous RootLayout
export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as "en" | "fi")) {
    notFound();
  }

  const now = await getNow();
  const timeZone = await getTimeZone();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <Provider>
          <IntlClientProviderWrapper // Wrap the app with the IntlClientProviderWrapper to customize getMessageFallback functionality
            messages={messages}
            locale={locale}
            now={now}
            timeZone={timeZone}
          >
            <Flex direction="column" minHeight="100svh" width="100%">
              <Topbar />
              <Flex flex="1" direction="column" mx="6" my="6" pt="50px">
                {children}
              </Flex>
              <Footer />
            </Flex>
          </IntlClientProviderWrapper>
        </Provider>
      </body>
    </html>
  );
}
