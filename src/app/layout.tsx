import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import NoiseOverlay from "@/components/NoiseOverlay";
import ParticleBackground from "@/components/ParticleBackground";
import LoadingScreen from "@/components/LoadingScreen";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Veera Bhanushali | Portfolio",
  description: "DevOps Engineer | AWS Solutions Architect | Cybersecurity Analyst",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} light`} style={{ colorScheme: 'light' }}>
      <body className="antialiased min-h-screen relative overflow-x-hidden selection:bg-blue-100 selection:text-blue-900 bg-[#F8F9FB]">
        <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_100%_100%_at_50%_-20%,rgba(219,234,254,0.5),rgba(255,255,255,0))]" />
        
        <LoadingScreen />
        <CustomCursor />
        <NoiseOverlay />
        <ParticleBackground />
        
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
