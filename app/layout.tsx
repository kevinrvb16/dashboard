import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils"

import Sidebar from "@/components/Sidebar"


export const metadata: Metadata = {
  title: "Dashboard challange.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={
          cn(
            "min-h-screen bg-background font-sans antialiased",
          )
        }
      >
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
