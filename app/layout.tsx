import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Simple Discord",
  description:
    "Simple Discord Clone. This not a production app, this only use for learning and testing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
