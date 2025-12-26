import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Optivis - Strategic Consulting Services",
  description: "Unlock growth, optimize operations, and drive success with tailored strategies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-[#070707] text-white`}>
        {children}
      </body>
    </html>
  );
}
