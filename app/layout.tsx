"use client";

import { usePathname } from "next/navigation";
import type { Metadata } from "next";
// import { Geist, Geist_Mono, Syne, Inter } from 'next/font/google';
import "./globals.css";
import Header from "@/components/Header";
import { ToastContainer, toast } from "react-toastify";
import { AppContextProvider } from "./context/appContext";

// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// });

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// });

// const syne = Syne({
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700', '800'],
//   variable: '--font-syne',
// });
// const inter = Inter({
//   subsets: ['latin'],
//   variable: '--font-inter',
//   weight: ['400', '500', '600', '700','800'],
// });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const hideHeader =
    pathname.startsWith("/login") ||
    pathname.startsWith("/register") ||
    pathname.startsWith("/dashboard");

  return (
    <html lang="en">
      <body className={`  antialiased bg-white text-black`}>
        {!hideHeader && <Header />}
        <AppContextProvider>{children}</AppContextProvider>
        <ToastContainer />
      </body>
      {/* <body className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} ${inter.variable}  antialiased bg-white text-black`}>
        {!hideHeader && <Header />}
        <AppContextProvider >
        {children}
        </AppContextProvider>
        <ToastContainer />
      </body> */}
    </html>
  );
}
