import type { Metadata } from "next";
import { Inter, Alegreya } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const alegreya = Alegreya({
  subsets: ["latin"],
  display: "swap",
  style: "italic",
  variable: "--font-alegreya",
});

export const metadata: Metadata = {
  title: "Skerries Hometown App",
  description: "A local app for Skerries locals",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`font-serif ${inter.variable} ${alegreya.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
