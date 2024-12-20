import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider";
import { Flex } from "@chakra-ui/react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
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

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <Provider>
          <NextIntlClientProvider messages={messages}>
            <Flex direction="column" minHeight="100vh" width="100%">
              <Topbar />
              <Flex flex="1" direction="column" mx="6">
                {children}
              </Flex>
              <Footer />
            </Flex>
          </NextIntlClientProvider>
        </Provider>
      </body>
    </html>
  );
}
