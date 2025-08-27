import Link from "next/link";
import { Calendar, Users, BookOpen, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ORGANIZATION_INFO, VISI_MISI } from "@/lib/data/constants";

export default function ProfilPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-800 to-red-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Tentang {ORGANIZATION_INFO.shortName}
            </h1>
            <p className="text-xl lg:text-2xl text-red-100 mb-8">
              {ORGANIZATION_INFO.tagline}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Berdiri {ORGANIZATION_INFO.established}</span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="flex items-center space-x-2">
                  <Target className="w-5 h-5" />
                  <span>Kabinet {ORGANIZATION_INFO.kabinet}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/profil/sejarah">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 group">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-200 transition-colors">
                  <BookOpen className="w-6 h-6 text-red-800" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Sejarah</h3>
                <p className="text-gray-600 text-sm">
                  Pelajari perjalanan panjang UKM Advokasi sejak berdiri
                </p>
              </div>
            </Link>

            <Link href="/profil/visi-misi">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 group">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-200 transition-colors">
                  <Target className="w-6 h-6 text-red-800" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Visi & Misi</h3>
                <p className="text-gray-600 text-sm">
                  Visi, misi, dan tujuan organisasi yang ingin dicapai
                </p>
              </div>
            </Link>

            <Link href="/profil/struktur">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 group">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-200 transition-colors">
                  <Users className="w-6 h-6 text-red-800" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Struktur Organisasi</h3>
                <p className="text-gray-600 text-sm">
                  Susunan kepengurusan Kabinet {ORGANIZATION_INFO.kabinet}
                </p>
              </div>
            </Link>

            <Link href="/profil/ad-art">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 group">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-200 transition-colors">
                  <BookOpen className="w-6 h-6 text-red-800" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">AD/ART</h3>
                <p className="text-gray-600 text-sm">
                  Anggaran Dasar dan Anggaran Rumah Tangga organisasi
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Visi Misi Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Visi & Misi Kami
              </h2>
              <p className="text-lg text-gray-600">
                Landasan dan arah perjuangan UKM Advokasi
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Visi */}
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-red-900 mb-4">Visi</h3>
                <p className="text-red-800 leading-relaxed">
                  {VISI_MISI.visi}
                </p>
              </div>

              {/* Misi */}
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Misi</h3>
                <ul className="space-y-3">
                  {VISI_MISI.misi.slice(0, 3).map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-800 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                        {index + 1}
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button asChild variant="outline" className="border-red-200 text-red-800 hover:bg-red-50">
                    <Link href="/profil/visi-misi">Lihat Selengkapnya</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Bergabunglah dengan Kami
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Jadilah bagian dari komunitas mahasiswa yang peduli terhadap hukum dan keadilan
          </p>
          <Button asChild size="lg" className="bg-red-800 hover:bg-red-900">
            <Link href="/pendaftaran">Daftar Sekarang</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
