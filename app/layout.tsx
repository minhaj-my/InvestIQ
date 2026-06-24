import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

export const runtime = "edge";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "InvestIQ",
  description: "smart investing insights.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
          body {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            height: 100dvh;
            --gap-size: 48px;
            --line-thickness: 1px;
            --background-color: #111;
             --line-color: rgba(135, 206, 235, 0.2);
            background-color: var(--background-color);
            background-image:
              repeating-linear-gradient(var(--line-color) 0 var(--line-thickness), transparent var(--line-thickness) var(--gap-size)),
              repeating-linear-gradient(90deg, var(--line-color) 0 var(--line-thickness), transparent var(--line-thickness) var(--gap-size));
            background-size: 100% var(--gap-size), var(--gap-size) 100%;
            animation: scroll 3s linear infinite;
          }

          .fading {
            position: absolute;
            inset: 0;
            background-image: linear-gradient(to top, var(--background-color), transparent 30%);
            pointer-events: none;
            z-index: 0;
          }

          @keyframes scroll {
            0% {
              background-position: 0 0, 0 0;
            }
            100% {
              background-position: 0 var(--gap-size), 0 0;
            }
          }
        `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="fading" />
        <main style={{ position: "relative", zIndex: 1 }}>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
