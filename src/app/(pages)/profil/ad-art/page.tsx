import { FileText, Download, BookOpen, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ORGANIZATION_INFO } from "@/lib/data/constants";

export default function AdArtPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-800 to-red-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              AD/ART
            </h1>
            <p className="text-xl text-red-100 mb-4">
              Anggaran Dasar dan Anggaran Rumah Tangga
            </p>
            <p className="text-lg text-red-200">
              {ORGANIZATION_INFO.shortName} - {ORGANIZATION_INFO.university}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="bg-white rounded-xl shadow-sm p-8 mb-8 border border-gray-200">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <Scale className="w-8 h-8 text-red-800" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Tentang AD/ART</h2>
                  <p className="text-gray-600">Aturan dasar organisasi</p>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-lg leading-relaxed mb-6">
                  Anggaran Dasar dan Anggaran Rumah Tangga (AD/ART) merupakan aturan dasar yang 
                  mengatur seluruh aspek organisasi {ORGANIZATION_INFO.shortName}. Dokumen ini 
                  menjadi pedoman dalam menjalankan aktivitas organisasi dan mengatur hubungan 
                  antar anggota.
                </p>
                
                <p className="text-lg leading-relaxed">
                  AD/ART disusun berdasarkan nilai-nilai luhur organisasi dan disesuaikan dengan 
                  kebutuhan serta perkembangan zaman, namun tetap mempertahankan prinsip-prinsip 
                  dasar yang telah ditetapkan sejak awal pendirian.
                </p>
              </div>
            </div>

            {/* Document Sections */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Anggaran Dasar */}
              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Anggaran Dasar</h3>
                    <p className="text-gray-600">Aturan fundamental</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Berisi:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                        <span>Nama dan kedudukan organisasi</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                        <span>Visi, misi, dan tujuan</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                        <span>Asas dan prinsip organisasi</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                        <span>Keanggotaan dan kepengurusan</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                        <span>Keuangan dan kekayaan</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <Button className="w-full bg-blue-800 hover:bg-blue-900">
                  <FileText className="w-4 h-4 mr-2" />
                  Baca Anggaran Dasar
                </Button>
              </div>

              {/* Anggaran Rumah Tangga */}
              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <FileText className="w-6 h-6 text-green-800" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Anggaran Rumah Tangga</h3>
                    <p className="text-gray-600">Aturan pelaksanaan</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Berisi:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                        <span>Tata cara penyelenggaraan organisasi</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                        <span>Tata tertib rapat dan musyawarah</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                        <span>Hak dan kewajiban anggota</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                        <span>Tugas dan wewenang pengurus</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                        <span>Sanksi dan penghargaan</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <Button className="w-full bg-green-800 hover:bg-green-900">
                  <FileText className="w-4 h-4 mr-2" />
                  Baca Anggaran Rumah Tangga
                </Button>
              </div>
            </div>

            {/* Download Section */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Download className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-red-900 mb-4">
                  Unduh Dokumen Lengkap
                </h3>
                
                <p className="text-red-800 mb-8 max-w-2xl mx-auto">
                  Dapatkan salinan lengkap dokumen AD/ART untuk dipelajari lebih mendalam. 
                  Dokumen tersedia dalam format PDF yang dapat diunduh secara gratis.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <Button className="bg-red-800 hover:bg-red-900 flex-1">
                    <Download className="w-4 h-4 mr-2" />
                    Unduh AD/ART (PDF)
                  </Button>
                  
                  <Button variant="outline" className="border-red-300 text-red-800 hover:bg-red-50 flex-1">
                    <FileText className="w-4 h-4 mr-2" />
                    Lihat Online
                  </Button>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 bg-white rounded-xl shadow-sm p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Informasi Tambahan
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                <div>
                  <h4 className="font-semibold mb-2">Status Dokumen:</h4>
                  <p className="text-sm">
                    AD/ART ini telah disahkan dalam Musyawarah Organisasi dan berlaku 
                    untuk seluruh anggota {ORGANIZATION_INFO.shortName}.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Pembaruan:</h4>
                  <p className="text-sm">
                    Dokumen dapat direvisi melalui Musyawarah Organisasi dengan 
                    persetujuan minimal 2/3 dari total anggota aktif.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Berlaku Sejak:</h4>
                  <p className="text-sm">
                    {ORGANIZATION_INFO.established} dan telah mengalami penyempurnaan 
                    sesuai perkembangan organisasi.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Kontak:</h4>
                  <p className="text-sm">
                    Untuk pertanyaan terkait AD/ART, hubungi pengurus melalui 
                    email: advokasiutbogor@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
