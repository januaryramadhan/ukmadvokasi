import Link from "next/link";
import { Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-20">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-8">
          <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Search className="w-12 h-12 text-red-800" />
          </div>
          
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Halaman Tidak Ditemukan
          </h2>
          <p className="text-gray-600 mb-8">
            Maaf, halaman yang Anda cari tidak dapat ditemukan. Mungkin halaman tersebut 
            telah dipindahkan atau URL yang Anda masukkan tidak tepat.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-red-800 hover:bg-red-900">
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Kembali ke Beranda
            </Link>
          </Button>
          
          <Button asChild variant="outline" className="border-gray-300">
            <Link href="/kontak">
              Hubungi Kami
            </Link>
          </Button>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-4">Halaman Populer:</h3>
          <div className="space-y-2">
            <Link 
              href="/profil" 
              className="block text-red-800 hover:text-red-900 transition-colors"
            >
              Profil UKM Advokasi
            </Link>
            <Link 
              href="/publikasi" 
              className="block text-red-800 hover:text-red-900 transition-colors"
            >
              Publikasi & Artikel
            </Link>
            <Link 
              href="/program-kerja" 
              className="block text-red-800 hover:text-red-900 transition-colors"
            >
              Program Kerja
            </Link>
            <Link 
              href="/pendaftaran" 
              className="block text-red-800 hover:text-red-900 transition-colors"
            >
              Pendaftaran Anggota
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
