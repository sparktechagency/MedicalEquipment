import type { Metadata } from "next";
import localFont from "next/font/local";
// Make sure this path is correct
import "./globals.css";
import ProviderContent from "@/redux/ProviderContent";

// Import your custom fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: 'Medical Equipment',
  description: 'High-quality medical devices and supplies for hospitals, clinics, and home care.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[]`}>
        {/* Wrap your entire app with the Provider */}
        <ProviderContent>
          {children}
        </ProviderContent>
      </body>
    </html>
  );
}

