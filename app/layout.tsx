"use client";

import { Quicksand } from "next/font/google";
import "./globals.css";
import Header from "@/components/Nav/Header";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";

const quicksand = Quicksand({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const hideOn = ["/login", "/registrasi"];
  return (
    <html lang="en">
      <body className={`${quicksand.variable} antialiased`}>
        {hideOn.includes(pathname) ? null : <Header />}
        {children}
        {hideOn.includes(pathname) ? null : <Footer />}
      </body>
    </html>
  );
}
