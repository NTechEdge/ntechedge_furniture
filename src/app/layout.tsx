import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Woodrox Furniture - Quality Furniture for Modern Living",
  description: "Discover our collection of premium furniture designed for modern living. Stylish, comfortable, and affordable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlow.variable}`}>
      <body className="font-barlow antialiased">
        <Header />
        <main className="pt-25">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
