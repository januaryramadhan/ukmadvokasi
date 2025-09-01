"use client";

import Link from "next/link";
import { Wrench, Clock, ArrowLeft, FileText, Mail, Phone, Home, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ORGANIZATION_INFO, CONTACT_INFO } from "@/lib/data/constants";

export default function DokumentasiPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-800 to-red-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Dokumentasi & Galeri
            </h1>
            <p className="text-xl text-red-100">
              Pusat dokumentasi, galeri, dan panduan {ORGANIZATION_INFO.shortName}
            </p>
          </div>
        </div>
      </section>

      {/* Maintenance Notice */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Main Maintenance Card */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden mb-8">
              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 px-8 py-12 text-center border-b border-gray-200">
                <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Wrench className="w-12 h-12 text-orange-600" />
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Sedang Dalam Maintenance
                </h2>
                
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Halaman dokumentasi dan galeri sedang dalam proses pengembangan dan pemeliharaan. 
                  Kami sedang bekerja keras untuk memberikan pengalaman terbaik bagi Anda.
                </p>

                <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 max-w-lg mx-auto">
                  <div className="flex items-center justify-center space-x-2 mb-3">
                    <Clock className="w-5 h-5 text-orange-600" />
                    <span className="font-semibold text-gray-900">Estimasi Selesai</span>
                  </div>
                  <p className="text-sm text-gray-700">
                    Kami sedang bekerja untuk menyelesaikan halaman ini. 
                    Terima kasih atas kesabaran Anda.
                  </p>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                  Yang Sedang Kami Kerjakan
                </h3>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <h4 className="font-medium text-gray-900 flex items-center">
                      <FileText className="w-5 h-5 mr-2 text-red-600" />
                      Fitur Dokumentasi
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Panduan lengkap organisasi</li>
                      <li>• Template surat dan dokumen</li>
                      <li>• Arsip digital UKM Advokasi</li>
                      <li>• Dokumentasi kegiatan dan program</li>
                      <li>• FAQ dan panduan anggota</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium text-gray-900 flex items-center">
                      <Camera className="w-5 h-5 mr-2 text-red-600" />
                      Fitur Galeri
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Galeri foto kegiatan</li>
                      <li>• Video dokumentasi program</li>
                      <li>• Album acara dan seminar</li>
                      <li>• Koleksi momen bersejarah</li>
                      <li>• Media sosial integration</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <h4 className="font-medium text-gray-900 mb-4 flex items-center">
                    <Wrench className="w-5 h-5 mr-2 text-red-600" />
                    Status Pengembangan
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Struktur Database</span>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Selesai</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Design Interface</span>
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">Proses</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Upload System</span>
                        <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs">Pending</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Testing & QA</span>
                        <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs">Pending</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild className="bg-red-800 hover:bg-red-900">
                    <Link href="/">
                      <Home className="w-5 h-5 mr-2" />
                      Kembali ke Beranda
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-red-800 text-red-800 hover:bg-red-50">
                    <Link href="/kontak">
                      <Mail className="w-5 h-5 mr-2" />
                      Hubungi Kami
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Alternative Resources */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <Link 
                href="/program-kerja"
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-200 transition-colors">
                  <Clock className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Program Kerja</h3>
                <p className="text-sm text-gray-600">
                  Informasi lengkap tentang program dan kegiatan organisasi
                </p>
              </Link>

              <Link 
                href="/publikasi"
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-200 transition-colors">
                  <FileText className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Publikasi</h3>
                <p className="text-sm text-gray-600">
                  Artikel dan karya tulis dari anggota UKM Advokasi
                </p>
              </Link>

              <Link 
                href="/profil"
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-200 transition-colors">
                  <ArrowLeft className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Profil UKM</h3>
                <p className="text-sm text-gray-600">
                  Pelajari sejarah, visi misi, dan struktur organisasi
                </p>
              </Link>
            </div>

            {/* Contact Support */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-200">
              <div className="text-center">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Butuh Bantuan atau Informasi?
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  Tim kami siap membantu Anda. Jangan ragu untuk menghubungi kami 
                  jika ada pertanyaan atau membutuhkan informasi lebih lanjut.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Mail className="w-4 h-4 text-red-600" />
                    <span>{CONTACT_INFO.email}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Phone className="w-4 h-4 text-red-600" />
                    <span>{CONTACT_INFO.phone}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
