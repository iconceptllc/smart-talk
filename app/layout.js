import { Inter } from "next/font/google";
import "./globals.css";
import Hero from "@/components/Hero";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Smart Talk",
  description: "Podcast & Video Production",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='bg-black min-h-[100vh]'>
          <Hero />
          {children}
        </div>
        </body>
    </html>
  );
}
