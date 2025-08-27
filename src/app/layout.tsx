import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "UKM Advokasi - Universitas Terbuka Bogor",
  description: "Unit Kegiatan Mahasiswa Advokasi - Wadah Bagi Mahasiswa Mempelajari Hukum dan Advokasi. Kabinet Prometheus Aletheia.",
  keywords: "UKM Advokasi, Universitas Terbuka Bogor, Hukum, Advokasi, Mahasiswa, Prometheus Aletheia",
  authors: [{ name: "UKM Advokasi UT Bogor" }],
  openGraph: {
    title: "UKM Advokasi - Universitas Terbuka Bogor",
    description: "Wadah Bagi Mahasiswa Mempelajari Hukum dan Advokasi",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
