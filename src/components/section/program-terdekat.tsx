"use client";

import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SAMPLE_PROGRAMS } from "@/lib/data/constants";

export default function ProgramTerdekat() {
  const upcomingProgram = SAMPLE_PROGRAMS.find(program => program.status === 'upcoming');

  if (!upcomingProgram) {
    return null;
  }

  return (
    <section className="py-16 bg-gradient-to-br from-red-800 via-red-700 to-red-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Program Terdekat
            </h2>
            <p className="text-xl text-red-100">
              Jangan lewatkan kesempatan untuk bergabung dengan kami
            </p>
          </div>

          {/* Program Banner */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden">
            <div className="flex flex-col lg:grid lg:grid-cols-5 gap-0">
              {/* Program Image */}
              <div className="lg:col-span-2 relative">
                <div className="aspect-[4/5] sm:aspect-[16/10] lg:aspect-[4/5] relative overflow-hidden">
                  <Image
                    src={upcomingProgram.image}
                    alt={upcomingProgram.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                    <span className="bg-yellow-400 text-yellow-900 text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2 rounded-full font-bold shadow-lg">
                      🔥 Segera Hadir
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
                    <span className="bg-red-600 text-white text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2 rounded-full font-medium">
                      {upcomingProgram.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Program Content */}
              <div className="lg:col-span-3 p-6 sm:p-8 lg:p-10 xl:p-12 text-white flex flex-col justify-center">
                <h3 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
                  {upcomingProgram.title}
                </h3>

                <p className="text-red-100 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed line-clamp-3">
                  {upcomingProgram.description}
                </p>

                {/* Program Details */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="flex items-center space-x-3 bg-white/10 p-3 sm:p-4 rounded-lg">
                    <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-red-200 text-xs sm:text-sm">Tanggal</p>
                      <p className="font-semibold text-sm sm:text-base">
                        {new Date(upcomingProgram.date).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "short",
                        })}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 bg-white/10 p-3 sm:p-4 rounded-lg">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-red-200 text-xs sm:text-sm">Waktu</p>
                      <p className="font-semibold text-sm sm:text-base">{upcomingProgram.time}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 bg-white/10 p-3 sm:p-4 rounded-lg">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-red-200 text-xs sm:text-sm">Lokasi</p>
                      <p className="font-semibold text-sm sm:text-base truncate">{upcomingProgram.location}</p>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button asChild size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold shadow-lg">
                    <Link href="/pendaftaran">
                      🎯 Daftar Sekarang
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                    <Link href="/program-kerja">
                      Lihat Semua Program
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
