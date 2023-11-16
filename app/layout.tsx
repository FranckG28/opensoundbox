import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sikish Sounds",
  description: "La fabrique de vos sonorités préférées.",
  openGraph: {
    title: "Sikish Sounds",
    description: "La fabrique de vos sonorités préférées.",
    url: "https://sikish.tgimenez.com",
    siteName: "Sikish Sounds",
    images: [
      {
        url: "/icons/og.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  icons: {
    icon: "/icon-512x512.png",
    shortcut: "/android-chrome-192x192.png",
    apple: "/icon-512x512.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/icon-512x512.png",
    },
  },
  manifest: "manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
