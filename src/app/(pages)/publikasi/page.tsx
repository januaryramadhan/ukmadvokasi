import Link from "next/link";
import { ArrowRight, AlertCircle, FileText, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ORGANIZATION_INFO, CONTACT_INFO } from "@/lib/data/constants";

export default function PublikasiPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-800 to-red-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Publikasi & Artikel
            </h1>
            <p className="text-xl text-red-100 mb-2">
              Pusat artikel, kajian hukum, dan publikasi {ORGANIZATION_INFO.shortName}
            </p>
          </div>
        </div>
      </section>

  
      {/* Maintenance Notice */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <AlertCircle className="w-8 h-8 text-amber-500" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Halaman Sedang Dikembangkan
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Halaman publikasi dan artikel sedang dalam proses pengembangan dan pemeliharaan. 
                    Kami sedang mempersiapkan sistem manajemen konten yang lebih baik untuk menampilkan 
                    artikel, kajian hukum, dan publikasi dari anggota {ORGANIZATION_INFO.shortName}.
                  </p>
                  
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                    <h3 className="font-semibold text-amber-900 mb-2">Status Pengembangan:</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-amber-800">
                        <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                        <span>Desain antarmuka publikasi</span>
                      </div>
                      <div className="flex items-center text-amber-800">
                        <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                        <span>Sistem manajemen artikel</span>
                      </div>
                      <div className="flex items-center text-amber-800">
                        <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                        <span>Kategori dan pencarian konten</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-red-800 hover:bg-red-900">
                      <Link href="/kontak">
                        Hubungi Kami
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="border-red-200 text-red-800 hover:bg-red-50">
                      <Link href="/">
                        Kembali ke Beranda
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Coming Soon */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <div className="flex items-center mb-4">
                  <FileText className="w-8 h-8 text-red-800 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    Artikel & Kajian
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Platform untuk berbagi artikel dan kajian hukum dari anggota dan pengurus
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Artikel hukum tematik</li>
                  <li>• Kajian kasus aktual</li>
                  <li>• Opini dan analisis</li>
                  <li>• Review regulasi terbaru</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <div className="flex items-center mb-4">
                  <Users className="w-8 h-8 text-red-800 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    Kontribusi Anggota
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Wadah untuk anggota mempublikasikan karya tulis dan penelitian
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Sistem submit artikel</li>
                  <li>• Review dan moderasi</li>
                  <li>• Profil penulis</li>
                  <li>• Statistik publikasi</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <div className="flex items-center mb-4">
                  <BookOpen className="w-8 h-8 text-red-800 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    Perpustakaan Digital
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Koleksi referensi hukum dan materi pembelajaran
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• E-book dan jurnal</li>
                  <li>• Materi pelatihan</li>
                  <li>• Template dokumen</li>
                  <li>• Panduan praktis</li>
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-6 border border-red-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                Ingin Berkontribusi atau Punya Pertanyaan?
              </h3>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Button asChild size="sm" className="bg-red-800 hover:bg-red-900">
                  <a 
                    href={`https://wa.me/${CONTACT_INFO.phone.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp Admin
                  </a>
                </Button>
                <Button asChild size="sm" variant="outline" className="border-red-200 text-red-800 hover:bg-red-50">
                  <a 
                    href={`mailto:${CONTACT_INFO.email}`}
                  >
                    Email Kami
                  </a>
                </Button>
                <Button asChild size="sm" variant="outline" className="border-red-200 text-red-800 hover:bg-red-50">
                  <a 
                    href={`https://instagram.com/${CONTACT_INFO.social.instagram.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
