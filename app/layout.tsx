import type { Metadata } from "next";
import { Unbounded, DM_Sans, Noto_Serif_Ethiopic } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/shared/LanguageContext";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const notoEthiopic = Noto_Serif_Ethiopic({
  subsets: ["ethiopic"],
  variable: "--font-ethiopic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Addis Ababa Smart City System (AASCS) | የአዲስ አበባ ስማርት ሲቲ",
  description:
    "Official digital governance and citizen services platform for the City Government of Addis Ababa. Access 24+ municipal e-services, live city telemetry, and sub-city GIS mapping.",
  keywords: [
    "Addis Ababa",
    "Smart City",
    "Ethiopia",
    "E-Services",
    "Citizen Portal",
    "Fayda ID",
    "Sub-Cities",
    "GovTech",
  ],
  authors: [{ name: "City Government of Addis Ababa" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#050C15",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${unbounded.variable} ${dmSans.variable} ${notoEthiopic.variable} bg-[#050C15] text-[#F0F4FF] min-h-screen flex flex-col`}
      >
        <LanguageProvider>
          <Navbar />
          <main className="flex-1 w-full relative">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
