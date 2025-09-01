import Link from "next/link";
import { ArrowLeft, AlertCircle, FileText, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ORGANIZATION_INFO, CONTACT_INFO } from "@/lib/data/constants";

interface ArticlePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { id } = await params;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <Button asChild variant="ghost" size="sm">
            <Link href="/publikasi">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali ke Publikasi
            </Link>
          </Button>
        </div>
      </div>

      {/* Maintenance Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <AlertCircle className="w-8 h-8 text-amber-500" />
                </div>
                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    Artikel Sedang Dikembangkan
                  </h1>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Halaman detail artikel dengan ID <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">{id}</code> sedang dalam proses pengembangan. 
                    Sistem publikasi dan manajemen artikel {ORGANIZATION_INFO.shortName} sedang dalam tahap pemeliharaan dan peningkatan fitur.
                  </p>
                  
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                    <h3 className="font-semibold text-amber-900 mb-2">Fitur yang Akan Tersedia:</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2 text-sm text-amber-800">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                          <span>Konten artikel lengkap</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                          <span>Sistem komentar</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                          <span>Fitur berbagi social media</span>
                        </div>
                      </div>
                      <div className="space-y-2 text-sm text-amber-800">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                          <span>Artikel terkait</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                          <span>Profil penulis</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                          <span>Download PDF</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <Button asChild className="bg-red-800 hover:bg-red-900">
                      <Link href="/publikasi">
                        Lihat Semua Publikasi
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="border-red-200 text-red-800 hover:bg-red-50">
                      <Link href="/kontak">
                        Hubungi Tim
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Alternative Content */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <div className="flex items-center mb-4">
                  <FileText className="w-8 h-8 text-red-800 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    Jelajahi Publikasi Lain
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Temukan artikel dan kajian hukum menarik lainnya dari tim {ORGANIZATION_INFO.shortName}
                </p>
                <Button asChild size="sm" variant="outline" className="border-red-200 text-red-800 hover:bg-red-50">
                  <Link href="/publikasi">
                    Lihat Publikasi
                  </Link>
                </Button>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <div className="flex items-center mb-4">
                  <Users className="w-8 h-8 text-red-800 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    Bergabung dengan Komunitas
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Ikuti kegiatan dan program {ORGANIZATION_INFO.shortName} untuk mengembangkan minat di bidang hukum
                </p>
                <Button asChild size="sm" variant="outline" className="border-red-200 text-red-800 hover:bg-red-50">
                  <Link href="/pendaftaran">
                    Info Pendaftaran
                  </Link>
                </Button>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-6 border border-red-200 mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                Punya Pertanyaan tentang Artikel Ini?
              </h3>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Button asChild size="sm" className="bg-red-800 hover:bg-red-900">
                  <a 
                    href={`https://wa.me/${CONTACT_INFO.phone.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp Tim
                  </a>
                </Button>
                <Button asChild size="sm" variant="outline" className="border-red-200 text-red-800 hover:bg-red-50">
                  <a 
                    href={`mailto:${CONTACT_INFO.email}`}
                  >
                    Email Kami
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
