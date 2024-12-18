import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider"
import "./globals.css";

export const metadata: Metadata = {
  title: "Tampereella",
  description: "All you need to know when in Tampere",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
