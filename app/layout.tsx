import type { Metadata } from "next";
import { Inter } from "next/font/google"; // 1. Import generic Inter
import "./globals.css";

// 2. Create the specific instance using lowercase 'inter'
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter", // Optional: defines a CSS variable
});

export const metadata: Metadata = {
  title: "Nehemiah's House",
  description: "Protective & Visionary Leadership",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 3. Use the lowercase 'inter' variable here */}
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}