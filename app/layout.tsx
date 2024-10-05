import type { Metadata } from "next";

import {
  ClerkProvider,
  // SignInButton,
  // SignedIn,
  // SignedOut,
  // UserButton,
} from "@clerk/nextjs";
import "./globals.css";
import { ModalProvider } from "@/providers/modal-providers";
import { ToastProvider } from "@/providers/toast-provider";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "ecommerce-admin",
  description: "ecommerce-admin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ToastProvider />
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
