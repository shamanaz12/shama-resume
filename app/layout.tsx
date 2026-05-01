import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Shama Naz | Web Developer & AI Enthusiast",
  description: "Portfolio of Shama Naz - A passionate Web Developer and AI enthusiast from Karachi, Pakistan, building modern web solutions and intelligent agents.",
  keywords: ["Shama Naz", "Web Developer", "Next.js Portfolio", "AI Enthusiast", "Karachi Developer", "Pakistan Software Engineer"],
  authors: [{ name: "Shama Naz" }],
  openGraph: {
    title: "Shama Naz | Portfolio",
    description: "Web Developer & AI Enthusiast building the future of web and intelligence.",
    url: "https://shamanaz.com",
    siteName: "Shama Naz Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shama Naz Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shama Naz | Web Developer",
    description: "Building modern web solutions and intelligent agents.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.variable} font-sans selection:bg-purple-500/30`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
