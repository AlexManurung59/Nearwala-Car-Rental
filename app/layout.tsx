import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider, SignIn } from "@clerk/nextjs";
import { SignedIn } from "@clerk/nextjs/app-beta";
import { SignedOut } from "@clerk/nextjs/app-beta/client";
import NavBar from "@/components/NavBar";

const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nirwala Car Rental",
  description: "Nirwala",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <SignedIn>
            <NavBar />
            {children}
          </SignedIn>
          <SignedOut>
            <SignIn />
          </SignedOut>
        </body>
      </html>
    </ClerkProvider>
  );
}
