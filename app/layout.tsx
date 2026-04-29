import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "senolytics.ai",
  description: "We build innovative Artificial Intelligence-based products to help businesses operating in ultra-competitive markets boost conversion rates, reduce customer acquisition costs and prevent fraud.",
  icons: { icon: "/images/favicon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
