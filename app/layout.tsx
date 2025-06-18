import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "PalletCraft - DIY Recycled Pallet Furniture",
  description:
    "Transform pallets into beautiful furniture with our sustainable DIY plans. Create eco-friendly storage, furniture, and garden projects.",
  generator: "v0.dev",
  keywords: ["DIY", "pallet furniture", "recycled", "sustainable", "eco-friendly", "woodworking"],
  authors: [{ name: "PalletCraft" }],
  creator: "PalletCraft",
  publisher: "PalletCraft",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  themeColor: "#16a34a",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://palletcraft.com",
    title: "PalletCraft - DIY Recycled Pallet Furniture",
    description:
      "Transform pallets into beautiful furniture with our sustainable DIY plans. Create eco-friendly storage, furniture, and garden projects.",
    siteName: "PalletCraft",
  },
  twitter: {
    card: "summary_large_image",
    title: "PalletCraft - DIY Recycled Pallet Furniture",
    description: "Transform pallets into beautiful furniture with our sustainable DIY plans.",
    creator: "@palletcraft",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/svg+xml" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#16a34a" />
      </head>
      <body>{children}</body>
    </html>
  )
}
