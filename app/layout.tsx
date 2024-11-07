import "@/styles/main.css";

import type { Metadata } from "next";

import { Footer } from "@/components/footer";
import * as FadeIn from "@/components/motion/staggers/fade";
import { Providers } from "@/components/providers";
import { OpenGraph } from "@/lib/og";

import clsx from "clsx";
import { Inter } from "next/font/google";

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
          <main className="mx-auto min-h-screen overflow-x-hidden md:overflow-x-visible ">
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
