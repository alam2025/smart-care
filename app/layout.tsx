"use client";

import { usePathname } from "next/navigation";
import type { Metadata } from "next";
// import { Geist, Geist_Mono, Syne, Inter } from 'next/font/google';
import "./globals.css";
import Header from "@/components/Header";
import { ToastContainer, toast } from "react-toastify";
import { AppContextProvider } from "./context/appContext";
import ReduxProvider from "@/lib/redux/providers/ReduxProvider";
import { useEffect } from "react";
import { store } from "@/lib/redux/store";
import { loadFromStorage } from "@/lib/redux/features/auth/authSlice";
import { initAuthFromStorage } from "@/lib/utils";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  useEffect(() => {
    initAuthFromStorage();
  }, []);

  const hideHeader =
    pathname.startsWith("/login") ||
    pathname.startsWith("/register") ||
    pathname.startsWith("/dashboard");

  return (
    <html lang="en">
      <body className={`  antialiased bg-white text-black`}>
        {!hideHeader && <Header />}
        <ReduxProvider>
          <AppContextProvider>{children}</AppContextProvider>
        </ReduxProvider>

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
