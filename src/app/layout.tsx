import type { Metadata } from "next";

import { portfolioData } from "@/data/portfolio";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(portfolioData.siteUrl),
  title: {
    default: portfolioData.seo.title,
    template: `%s | ${portfolioData.profile.name}`,
  },
  description: portfolioData.seo.description,
  keywords: portfolioData.seo.keywords,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: portfolioData.seo.title,
    description: portfolioData.seo.description,
    url: portfolioData.siteUrl,
    siteName: portfolioData.profile.name,
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Bhavik Songara portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: portfolioData.seo.title,
    description: portfolioData.seo.description,
    images: ["/opengraph-image"],
  },
};

export const viewport = {
  themeColor: "#f5f9ff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
