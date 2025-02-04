import "./globals.css"
import type { Metadata } from "next"
import { Cairo } from "next/font/google"
import type React from "react" // Import React

const cairo = Cairo({ subsets: ["arabic"] })

export const metadata: Metadata = {
  title: "نظام إنشاء والتحقق من رموز QR والرموز",
  description: "نظام شامل لإنشاء وإدارة رموز QR ورموز التحقق",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>{children}</body>
    </html>
  )
}

