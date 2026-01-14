import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Fitness Zone - Transform Your Body Today | Premium Gym & Personal Training",
  description: "Join 5,000+ members achieving their fitness goals with expert trainers, world-class equipment, and 24/7 access. Try risk-free for 7 days. Plans from $29/month.",
  keywords: "fitness, gym, personal training, workout, group classes, nutrition plans, 24/7 gym",
  openGraph: {
    title: "Fitness Zone - Transform Your Body Today",
    description: "Join 5,000+ members achieving their fitness goals with expert trainers, world-class equipment, and 24/7 access. Try risk-free for 7 days.",
    type: "website",
    url: "https://fitness-zone.com",
    images: [
      {
        url: "https://fitness-zone.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fitness Zone - Premium Gym & Training",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fitness Zone - Transform Your Body Today",
    description: "Join 5,000+ members achieving their fitness goals. Try risk-free for 7 days. Plans from $29/month.",
    images: ["https://fitness-zone.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* TODO: Add Google Analytics
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
        */}
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
