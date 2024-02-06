import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Online Best Buy",
  description: "lower price with us",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
            <Header/>
            {children}
            <footer className="footer footer-center p-4 bg-base-300 text-base-content bottom-0">
              <p>Copyright @ 2023 - all right</p>
            </footer>
          </div>
        </body>
    </html>
  );
}
