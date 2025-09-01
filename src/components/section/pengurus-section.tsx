"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ORGANIZATIONAL_STRUCTURE } from "@/lib/data/constants";

export default function PengurusSection() {
  // Ambil pengurus inti saja untuk halaman beranda
  const pengurus = ORGANIZATIONAL_STRUCTURE.filter(person => person.level === 'executive');
  
  // Mapping untuk foto pengurus
  const pengurusPhotos = {
    "Rafly Alviandi": "/images/pengurus/ketua-umum.webp",
    "Nisah Rahmawati": "/images/pengurus/wakil-ketua.webp", 
    "Alya Nur Rahmawati": "/images/pengurus/sekretaris-umum.webp",
    "Clara Sailendra": "/images/pengurus/bendahara-umum.webp"
  };

  const mainOfficers = pengurus.slice(0, 4); // Hanya 4 pengurus inti

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Struktur Kepengurusan
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Tim yang berdedikasi untuk kemajuan UKM Advokasi
            </p>
          </div>

          {/* Main Officers Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
            {mainOfficers.map((officer, index) => (
              <div
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="aspect-[4/5] relative overflow-hidden bg-gradient-to-br from-red-100 to-red-200">
                  {pengurusPhotos[officer.name as keyof typeof pengurusPhotos] ? (
                    <Image
                      src={pengurusPhotos[officer.name as keyof typeof pengurusPhotos]}
                      alt={officer.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Users className="w-10 h-10 sm:w-16 sm:h-16 text-red-600" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  {index === 0 && (
                    <div className="absolute top-2 left-2 sm:top-4 sm:left-4">
                      <div className="bg-yellow-400 text-yellow-900 p-1 sm:p-2 rounded-full">
                        <Crown className="w-3 h-3 sm:w-4 sm:h-4" />
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="p-3 sm:p-6 text-center">
                  <h3 className="font-bold text-sm sm:text-lg text-gray-900 mb-1 sm:mb-2 leading-tight">
                    {officer.name}
                  </h3>
                  <p className="text-red-600 font-medium text-xs sm:text-sm">
                    {officer.position}
                  </p>
                  {officer.department && (
                    <p className="text-gray-500 text-xs sm:text-sm mt-1 hidden sm:block">
                      {officer.department}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Stats & CTA */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Organisasi yang Solid
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
                  UKM Advokasi terdiri dari struktur organisasi yang lengkap dengan 
                  Dewan Pengarah, Dewan Pembina, dan Pengurus yang berpengalaman 
                  di bidang hukum dan advokasi.
                </p>
                
                <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-base sm:text-2xl font-bold text-red-600 mb-1">
                      2
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500 leading-tight">Dewan Pengarah</div>
                  </div>
                  <div className="text-center">
                    <div className="text-base sm:text-2xl font-bold text-red-600 mb-1">
                      1
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500 leading-tight">Dewan Pembina</div>
                  </div>
                  <div className="text-center">
                    <div className="text-base sm:text-2xl font-bold text-red-600 mb-1">
                      8
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500 leading-tight">Pengurus Inti</div>
                  </div>
                </div>

                <Button asChild className="bg-red-800 hover:bg-red-900 w-full sm:w-auto text-sm sm:text-base">
                  <Link href="/profil/struktur">
                    Lihat Struktur Lengkap
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>

              <div className="flex justify-center order-first md:order-last">
                <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center">
                  <Users className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-red-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
