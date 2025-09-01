import Link from "next/link";
import { ArrowRight, AlertCircle, FileText, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LatestPublications() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-2 mb-4">
            <AlertCircle className="w-4 h-4 text-amber-600" />
            <span className="text-amber-800 text-sm font-medium">Dalam Pengembangan</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Publikasi & Artikel
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Platform publikasi dan artikel sedang dalam pengembangan untuk memberikan pengalaman yang lebih baik
          </p>
        </div>

        {/* Maintenance Notice */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 sm:p-8 mb-8">
            <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="flex-shrink-0">
                <AlertCircle className="w-8 h-8 text-amber-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-amber-900 mb-2">
                  Sistem Publikasi Sedang Dikembangkan
                </h3>
                <p className="text-amber-800 mb-4 leading-relaxed">
                  Kami sedang membangun platform publikasi yang lebih canggih untuk menampilkan artikel, 
                  kajian hukum, dan karya tulis dari anggota UKM Advokasi. Harap tunggu hingga sistem selesai dikembangkan.
                </p>
                
                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <FileText className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                    <p className="text-xs text-amber-800">Artikel & Kajian</p>
                  </div>
                  <div className="text-center">
                    <Users className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                    <p className="text-xs text-amber-800">Kontribusi Anggota</p>
                  </div>
                  <div className="text-center">
                    <BookOpen className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                    <p className="text-xs text-amber-800">Perpustakaan Digital</p>
                  </div>
                </div>
                
                <Button asChild size="sm" className="bg-amber-600 hover:bg-amber-700 text-white">
                  <Link href="/publikasi">
                    Lihat Status Pengembangan
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Alternative Actions */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                  <FileText className="w-6 h-6 text-red-800" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Program Kerja</h3>
                  <p className="text-sm text-gray-600">Lihat kegiatan terbaru</p>
                </div>
              </div>
              <Button asChild variant="outline" size="sm" className="border-red-200 text-red-800 hover:bg-red-50">
                <Link href="/program-kerja">
                  Jelajahi Program
                </Link>
              </Button>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-red-800" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Bergabung</h3>
                  <p className="text-sm text-gray-600">Info pendaftaran anggota</p>
                </div>
              </div>
              <Button asChild variant="outline" size="sm" className="border-red-200 text-red-800 hover:bg-red-50">
                <Link href="/pendaftaran">
                  Info Pendaftaran
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
