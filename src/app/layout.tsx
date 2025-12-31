import type { Metadata } from "next";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "NexusFlow - Elite Virtual Assistants",
  description: "Connect with elite Filipino virtual assistants for admin tasks, video editing, development, and customer support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-neutral-900 bg-orange-50 min-h-full font-inter antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
