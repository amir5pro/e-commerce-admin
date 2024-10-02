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
        <body>
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
