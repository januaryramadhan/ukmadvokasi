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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Struktur Kepengurusan
            </h2>
            <p className="text-lg text-gray-600">
              Tim yang berdedikasi untuk kemajuan UKM Advokasi
            </p>
          </div>

          {/* Main Officers Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
            {mainOfficers.map((officer, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="aspect-[4/5] relative overflow-hidden bg-gradient-to-br from-red-100 to-red-200">
                  {pengurusPhotos[officer.name as keyof typeof pengurusPhotos] ? (
                    <Image
                      src={pengurusPhotos[officer.name as keyof typeof pengurusPhotos]}
                      alt={officer.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Users className="w-16 h-16 text-red-600" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  {index === 0 && (
                    <div className="absolute top-4 left-4">
                      <div className="bg-yellow-400 text-yellow-900 p-2 rounded-full">
                        <Crown className="w-4 h-4" />
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="p-6 text-center">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    {officer.name}
                  </h3>
                  <p className="text-red-600 font-medium text-sm">
                    {officer.position}
                  </p>
                  {officer.department && (
                    <p className="text-gray-500 text-sm mt-1">
                      {officer.department}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Stats & CTA */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  Organisasi yang Solid
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
                  UKM Advokasi terdiri dari struktur organisasi yang lengkap dengan 
                  Dewan Pengarah, Dewan Pembina, dan Pengurus yang berpengalaman 
                  di bidang hukum dan advokasi.
                </p>
                
                <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-red-600 mb-1">
                      2
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500">Dewan Pengarah</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-red-600 mb-1">
                      1
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500">Dewan Pembina</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-red-600 mb-1">
                      8
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500">Pengurus Inti</div>
                  </div>
                </div>

                <Button asChild className="bg-red-800 hover:bg-red-900 w-full sm:w-auto">
                  <Link href="/profil/struktur">
                    Lihat Struktur Lengkap
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>

              <div className="flex justify-center">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
