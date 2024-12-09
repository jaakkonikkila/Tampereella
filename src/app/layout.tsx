import type { Metadata } from "next";
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
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
