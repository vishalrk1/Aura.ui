import "@/styles/main.css";

import type { Metadata } from "next";

import { Footer } from "@/components/footer";
import * as FadeIn from "@/components/motion/staggers/fade";
import { Providers } from "@/components/providers";
import { OpenGraph } from "@/lib/og";

import clsx from "clsx";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";

export const metadata: Metadata = {
  ...OpenGraph,
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clsx(inter.className)} suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar/>
          <main className="mx-auto min-h-screen max-w-screen-2xl overflow-x-hidden px-6 py-24 md:overflow-x-visible ">
            <article className="article">{children}</article>
          </main>
          <FadeIn.Item>
            <Footer />
          </FadeIn.Item>
        </Providers>
      </body>
    </html>
  );
}
