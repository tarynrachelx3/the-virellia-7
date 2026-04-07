import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Nova Vox",
  description: "Dark-pop transmissions from Virellia-7.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cinzel.variable} ${cormorant.variable}`}>
        <Header />

        {children}

        <footer className="site-footer">
          <div className="container footer-inner">
            <p>Nova Vox is a Starlust Audio project. © 2026 Starlust Audio. All rights reserved.</p>
            <p>Signal sourced from Virellia-7.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}