import { Inter } from "next/font/google";
import "./globals.css";
import Hero from "@/components/Hero";
import { GoogleTagManager } from '@next/third-parties/google' 
import { sendGTMEvent } from '@next/third-parties/google' 


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Smart Talk",
  description: "Podcast & Video Production",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <GoogleTagManager gtmId="AW-1047332511" />
       
      <body className={inter.className}>
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=AW-1047332511"
height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
        <div className='bg-black min-h-[100vh]'>
          <Hero />
          {children}
        </div>
         {/* Insert custom script for sending GTM event */}
         <script dangerouslySetInnerHTML={{
          __html: `
            window.addEventListener('load', function() {
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({
                event: 'conversion',
                send_to: 'AW-1047332511/chHACJXczLgZEJ-NtPMD'
              });
            });
          `,
        }} />
        </body>
    </html>
  );
}
