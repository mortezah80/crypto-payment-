import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ReduxProvider from "@/store/provider";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title: "Crypto Payment",
  description: "Generated by Meha",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={"h-screen"}>
        <NextTopLoader
          color="#2299DD"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={500}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        />
        <ReduxProvider>{children}</ReduxProvider>
        <div id="portal" />
      </body>
    </html>
  );
}
