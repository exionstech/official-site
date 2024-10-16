import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import "@/components/buttons/main-button.css";
import { cn } from "@/lib/utils";
import CrispChat from "@/components/crisp";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import NavBar from "@/components/navbar";
import FooterSection from "./_components/footer";
import type { Viewport } from "next";
import dynamic from 'next/dynamic';
import Script from 'next/script';

const Loader = dynamic(() => import('./_components/loader'), { ssr: false });

export const metadata: Metadata = {
  title: "Exions Tech",
  description:
    "A premier IT services and consultancy service. We specialize in website and app design, development, and social media services, delivering customized solutions for your business needs.",
  icons: { apple: "/icon.png", icon: "/icon.png" },
  manifest: "./manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#fff",
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="!scroll-smooth"
      style={{ scrollBehavior: "smooth" }}
    >
      <head>
        <style>{`
          #content { display: none; }
          #loader { display: flex; }
        `}</style>
      </head>
      <body
        className={cn(
          "text-text bg-white grainy relative overflow-x-hidden",
          spaceGrotesk.className
        )}
        suppressHydrationWarning
      >
        <div id="loader" className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <Loader />
        </div>
        <div id="content">
          <NavBar />
          {children}
          <CrispChat />
          <Analytics />
          <SpeedInsights />
          <FooterSection />
        </div>
        <Script id="show-page" strategy="afterInteractive">
          {`
            function showContent() {
              document.getElementById('loader').style.display = 'none';
              document.getElementById('content').style.display = 'block';
            }
            setTimeout(showContent, 6000);
          `}
        </Script>
      </body>
    </html>
  );
}