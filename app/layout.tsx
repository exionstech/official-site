import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import '@/components/buttons/main-button.css'
import { cn } from "@/lib/utils";
import CrispChat from "@/components/crisp";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import NavBar from "@/components/navbar";
import FooterSection from "./_components/footer";


export const metadata: Metadata = {
  title: "Exions Tech",
  description:
    "A premier IT services and consultancy service. We specialize in website and app design, development, and social media services, delivering customized solutions for your business needs.",
  icons: { icon: "./logo/logo2.svg" },
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
      <body className={cn("text-text bg-white grainy relative overflow-x-hidden", spaceGrotesk.className)}>
      <NavBar />
        {children}
        <CrispChat />
        <Analytics />
        <SpeedInsights />
        <FooterSection />
      </body>
    </html>
  );
}
