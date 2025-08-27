import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SAMPLE_PROGRAMS } from "@/lib/data/constants";

export default function ProgramKerjaPage() {
  const upcomingPrograms = SAMPLE_PROGRAMS.filter(program => program.status === 'upcoming');
  const completedPrograms = SAMPLE_PROGRAMS.filter(program => program.status === 'completed');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-800 to-red-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Program Kerja
            </h1>
            <p className="text-xl text-red-100 mb-8">
              Kegiatan dan program kerja yang dirancang untuk mengembangkan kemampuan advokasi dan membangun budaya kritis mahasiswa
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">{upcomingPrograms.length}</div>
                <div className="text-red-200 text-sm">Program Mendatang</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">{completedPrograms.length}</div>
                <div className="text-red-200 text-sm">Program Selesai</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">{SAMPLE_PROGRAMS.length}</div>
                <div className="text-red-200 text-sm">Total Program</div>
              </div>
            </div>
          </div>
        </div>
      </section>

   

      {/* Upcoming Programs Banner */}
      {upcomingPrograms.length > 0 && (
        <section className="py-8 md:py-16 ">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              {upcomingPrograms.map((program) => (
                <div
                  key={program.id}
                  className="bg-gradient-to-br from-red-800 via-red-700 to-red-900 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden"
                >
                  <div className="flex flex-col lg:grid lg:grid-cols-5 gap-0">
                    {/* Program Image */}
                    <div className="lg:col-span-2 relative">
                      <div className="aspect-[4/5] sm:aspect-[16/10] lg:aspect-[4/5] relative overflow-hidden">
                        <Image
                          src={program.image}
                          alt={program.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                          <span className="bg-yellow-400 text-yellow-900 text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2 rounded-full font-bold shadow-lg">
                            🔥 Program Mendatang
                          </span>
                        </div>
                        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
                          <span className="bg-red-600 text-white text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2 rounded-full font-medium">
                            {program.category}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Program Content */}
                    <div className="lg:col-span-3 p-6 sm:p-8 lg:p-10 xl:p-12 text-white flex flex-col justify-center">
                      <div className="mb-3 sm:mb-4">
                        <span className="text-red-200 text-xs sm:text-sm font-medium uppercase tracking-wider">
                          Segera Hadir
                        </span>
                      </div>
                      
                      <h2 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
                        {program.title}
                      </h2>

                      <p className="text-red-100 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed line-clamp-3 lg:line-clamp-none">
                        {program.description}
                      </p>

                      {/* Program Details */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                        <div className="flex items-center space-x-3 bg-white/10 p-3 sm:p-4 rounded-lg">
                          <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 flex-shrink-0" />
                          <div className="min-w-0">
                            <p className="text-red-200 text-xs sm:text-sm">Tanggal</p>
                            <p className="font-semibold text-sm sm:text-base truncate">
                              {new Date(program.date).toLocaleDateString("id-ID", {
                                weekday: "long",
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                              })}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-3 bg-white/10 p-3 sm:p-4 rounded-lg">
                          <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 flex-shrink-0" />
                          <div className="min-w-0">
                            <p className="text-red-200 text-xs sm:text-sm">Waktu</p>
                            <p className="font-semibold text-sm sm:text-base">{program.time}</p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-3 bg-white/10 p-3 sm:p-4 rounded-lg sm:col-span-2 lg:col-span-1 xl:col-span-2">
                          <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 flex-shrink-0" />
                          <div className="min-w-0">
                            <p className="text-red-200 text-xs sm:text-sm">Lokasi</p>
                            <p className="font-semibold text-sm sm:text-base truncate">{program.location}</p>
                          </div>
                        </div>
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <Button asChild size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold shadow-lg text-sm sm:text-base">
                          <Link href="/pendaftaran">
                          Daftar Sekarang
                          </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="border-white/30 text-black hover:bg-white/10 hover:text-white text-sm sm:text-base">
                          <Link href={`/program-kerja/${program.id}`}>
                            Lihat Detail
                            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Completed Programs */}
      {completedPrograms.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Program Terlaksana
                </h2>
                <p className="text-lg text-gray-600">
                  Dokumentasi program-program yang telah berhasil dilaksanakan
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                {completedPrograms.map((program) => (
                  <div
                    key={program.id}
                    className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    {/* Program Image */}
                    <div className="aspect-[4/5] bg-gradient-to-br from-red-100 to-red-200 relative overflow-hidden">
                      <Image
                        src={program.image}
                        alt={program.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                      <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                        <span className="bg-red-600 text-white text-xs px-2 sm:px-3 py-1 rounded-full font-medium">
                          {program.category}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                        <span className="bg-white/90 text-red-800 text-xs px-2 py-1 rounded-full font-medium">
                          Selesai
                        </span>
                      </div>
                    </div>

                    {/* Program Content */}
                    <div className="p-4 sm:p-6">
                      <h3 className="font-semibold text-lg sm:text-xl text-gray-900 mb-3 line-clamp-2">
                        {program.title}
                      </h3>

                      <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-2">
                        {program.description}
                      </p>

                      {/* Program Details */}
                      <div className="space-y-2 mb-4 sm:mb-6">
                        <div className="flex items-center text-xs sm:text-sm text-gray-500">
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-red-600 flex-shrink-0" />
                          <span className="truncate">
                            {new Date(program.date).toLocaleDateString("id-ID", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                        <div className="flex items-center text-xs sm:text-sm text-gray-500">
                          <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-red-600 flex-shrink-0" />
                          <span>{program.time}</span>
                        </div>
                        <div className="flex items-center text-xs sm:text-sm text-gray-500">
                          <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-red-600 flex-shrink-0" />
                          <span className="truncate">{program.location}</span>
                        </div>
                      </div>

                      <div className="flex space-x-3">
                        <Button asChild variant="outline" size="sm" className="flex-1 border-red-200 text-red-800 hover:bg-red-50 text-xs sm:text-sm">
                          <Link href={`/program-kerja/${program.id}`}>
                            Lihat Dokumentasi
                            <ArrowRight className="ml-1 w-3 h-3 sm:w-4 sm:h-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Punya Ide Program Menarik?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Bergabunglah dengan kami dan wujudkan ide-ide brilian Anda untuk kemajuan organisasi
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-red-800 hover:bg-red-900">
                <Link href="/pendaftaran">
                  Bergabung Sekarang
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-gray-400 text-gray-300 hover:bg-gray-800">
                <Link href="/kontak">
                  Hubungi Kami
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
