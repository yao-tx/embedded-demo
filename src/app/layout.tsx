import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FastSpring Embedded Checkout Demo",
  description: "A quick demo on Embedded Checkout for handling redirection payment methods.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="fsc-api"
          src={process.env.NEXT_PUBLIC_FASTSPRING_JS_URL}
          strategy="beforeInteractive"
          data-storefront={process.env.NEXT_PUBLIC_FASTSPRING_STOREFRONT}
          data-access-key={process.env.NEXT_PUBLIC_FASTSPRING_DATA_ACCESS_KEY}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
