import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "../components/LayoutWrapper";
import 'leaflet/dist/leaflet.css';
import '@/lib/fontawesome';
import { ToastProvider } from "@/components/ToastProvider";

// Load only Instrument Sans
const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "3YP Admin Panel",
  description: "Fleet and Trip Management Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSans.variable} font-sans antialiased`}
      >
        <ToastProvider />
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}