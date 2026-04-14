import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteConfig = {
  name: "Zenin Growth Partners",
  description: "Zenin handles your operations, customer support, and backend workflows so you can focus on growth. Premium BPO and business support solutions.",
  url: "https://zeningrowth.com", // Assuming domain
  ogImage: "https://zeningrowth.com/og-image.jpg",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Scale Your Business Without Hiring`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["BPO", "Business Support Outsourcing", "Customer Experience", "Back Office Support", "Lead Generation Agency", "Scale Operations", "Outsourced Operations"],
  authors: [{ name: "Zenin Growth Partners" }],
  creator: "Zenin Growth Partners",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": siteConfig.name,
              "url": siteConfig.url,
              "logo": `${siteConfig.url}/logo.png`,
              "description": siteConfig.description,
              "sameAs": [
                "https://linkedin.com/company/zeningrowth",
                // Add other social links here
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-000-0000",
                "contactType": "customer service",
                "areaServed": "Worldwide",
                "availableLanguage": "English"
              }
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans min-h-screen selection:bg-accent selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
