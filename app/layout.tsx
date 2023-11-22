import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Footer } from "@/components/footer";
import {
  RedixProvider,
  SocketProvider,
  ToastProvider,
} from "@/components/providers";
import { QueryProvider } from "@/components/providers/query-provider";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simple Discord",
  description:
    "Simple Discord Clone. This not a production app, this only use for learning and testing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cn(font.className, "flex flex-col overflow-hidden")}>
          <SocketProvider>
            <RedixProvider>
              <QueryProvider>{children}</QueryProvider>
              <Footer />
            </RedixProvider>
            <ToastProvider />
          </SocketProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
