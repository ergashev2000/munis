import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assests/styles/global.scss";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { notFound } from "next/navigation";

import { Footer, Navbar, LoginModal, RegisterModal } from "@/components";
import Snow from "@/components/ui/Snow";
import Providers from "@/utils/Providers";

const inter = Inter({ subsets: ["latin"] });

const locales = ["uz", "ru"];

export const metadata: Metadata = {
  title: "Munis do'koni",
  description: "Munis online do'kon",
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as any)) notFound();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Providers>
          <Snow />
          <Navbar />
          <main className="container mx-auto">{children}</main>
          <Footer />
          <SpeedInsights/>
        </Providers>
      </body>
    </html>
  );
}
