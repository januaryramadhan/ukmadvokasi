"use client";

import Link from "next/link";
import { User, Mail, Phone, MapPin, FileText, Clock, MessageCircle, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ORGANIZATION_INFO, CONTACT_INFO } from "@/lib/data/constants";

export default function PendaftaranPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-800 to-red-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Pendaftaran Anggota
            </h1>
            <p className="text-xl text-red-100 mb-8">
              Bergabunglah dengan {ORGANIZATION_INFO.shortName} dan jadilah bagian dari komunitas yang peduli hukum dan keadilan
            </p>
            
            {/* Benefits */}
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <User className="w-8 h-8 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Pengembangan Diri</h3>
                <p className="text-sm text-red-100">Tingkatkan kemampuan analitis dan public speaking</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <FileText className="w-8 h-8 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Publikasi Karya</h3>
                <p className="text-sm text-red-100">Platform untuk menerbitkan artikel dan kajian hukum</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <MapPin className="w-8 h-8 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Jaringan Luas</h3>
                <p className="text-sm text-red-100">Bangun koneksi dengan praktisi dan akademisi hukum</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Closed Notice */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Main Notice */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden mb-8">
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 px-8 py-8 text-center border-b border-gray-200">
                <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-10 h-10 text-yellow-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Pendaftaran Sedang Ditutup
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Maaf, periode pendaftaran anggota baru UKM Advokasi saat ini sedang ditutup.
                </p>
                <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 max-w-md mx-auto">
                  <p className="text-sm text-gray-700">
                    <strong>Informasi pendaftaran selanjutnya</strong> akan diumumkan melalui media sosial resmi kami
                  </p>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                  Tetap Terhubung Dengan Kami
                </h3>
                
                {/* Social Media & Contact */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <h4 className="font-medium text-gray-900 flex items-center">
                      <MessageCircle className="w-5 h-5 mr-2 text-red-600" />
                      Media Sosial
                    </h4>
                    <div className="space-y-3">
                      <a 
                        href="https://instagram.com/ukmadvokasiut" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 text-gray-600 hover:text-red-600 transition-colors group"
                      >
                        <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        <span>{CONTACT_INFO.social.instagram}</span>
                      </a>
                      <a 
                        href="https://twitter.com/UKMADVOKASI_" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 text-gray-600 hover:text-red-600 transition-colors group"
                      >
                        <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        <span>{CONTACT_INFO.social.twitter}</span>
                      </a>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium text-gray-900 flex items-center">
                      <Phone className="w-5 h-5 mr-2 text-red-600" />
                      Kontak Langsung
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 text-gray-600">
                        <Mail className="w-5 h-5" />
                        <span className="text-sm">{CONTACT_INFO.email}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-600">
                        <Phone className="w-5 h-5" />
                        <span className="text-sm">{CONTACT_INFO.phone}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild className="bg-red-800 hover:bg-red-900">
                    <Link href="/kontak">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Hubungi Kami
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-red-800 text-red-800 hover:bg-red-50">
                    <Link href="/program-kerja">
                      <FileText className="w-5 h-5 mr-2" />
                      Lihat Program Kami
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Pertanyaan yang Sering Diajukan
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    Kapan pendaftaran akan dibuka kembali?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Informasi pembukaan pendaftaran akan diumumkan melalui media sosial resmi kami. 
                    Pastikan untuk mengikuti akun Instagram dan Twitter UKM Advokasi.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    Apakah ada syarat khusus untuk mendaftar?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Pendaftaran terbuka untuk semua mahasiswa {ORGANIZATION_INFO.university} 
                    dari berbagai program studi yang memiliki minat terhadap bidang hukum dan advokasi.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    Bagaimana cara mendapatkan informasi terbaru?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Ikuti media sosial kami atau hubungi kontak yang tersedia untuk mendapatkan 
                    informasi terbaru tentang kegiatan dan pendaftaran UKM Advokasi.
                  </p>
                </div>
              </div>
            </div>

            {/* Alternative Actions */}
            <div className="mt-8 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4 text-center">
                Sementara menunggu pendaftaran dibuka...
              </h3>
              
              <div className="grid sm:grid-cols-3 gap-4">
                <Link 
                  href="/publikasi"
                  className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow group"
                >
                  <FileText className="w-8 h-8 mx-auto mb-2 text-red-600 group-hover:scale-110 transition-transform" />
                  <h4 className="font-medium text-sm text-gray-900">Baca Publikasi</h4>
                  <p className="text-xs text-gray-600 mt-1">Artikel & kajian hukum</p>
                </Link>
                
                <Link 
                  href="/galeri"
                  className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow group"
                >
                  <MapPin className="w-8 h-8 mx-auto mb-2 text-red-600 group-hover:scale-110 transition-transform" />
                  <h4 className="font-medium text-sm text-gray-900">Lihat Galeri</h4>
                  <p className="text-xs text-gray-600 mt-1">Dokumentasi kegiatan</p>
                </Link>
                
                <Link 
                  href="/profil"
                  className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow group"
                >
                  <User className="w-8 h-8 mx-auto mb-2 text-red-600 group-hover:scale-110 transition-transform" />
                  <h4 className="font-medium text-sm text-gray-900">Profil UKM</h4>
                  <p className="text-xs text-gray-600 mt-1">Sejarah & visi misi</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
