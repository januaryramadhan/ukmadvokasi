import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, Clock, Users, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SAMPLE_PROGRAMS } from "@/lib/data/constants";

interface ProgramPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProgramPage({ params }: ProgramPageProps) {
  const { id } = await params;
  const program = SAMPLE_PROGRAMS.find(p => p.id === id);

  if (!program) {
    notFound();
  }

  const relatedPrograms = SAMPLE_PROGRAMS.filter(p => p.id !== id).slice(0, 3);
  const isUpcoming = program.status === 'upcoming';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <Button asChild variant="ghost" size="sm">
            <Link href="/program-kerja">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali ke Program Kerja
            </Link>
          </Button>
        </div>
      </div>

      {/* Program Header & Image */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
              {/* Program Image */}
              <div className="lg:col-span-2 order-2 lg:order-1">
                <div className="aspect-[4/5] bg-gradient-to-br from-red-100 to-red-200 rounded-xl overflow-hidden relative">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-800 text-white text-sm px-4 py-2 rounded-full font-medium">
                      {program.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Program Content */}
              <div className="lg:col-span-3 order-1 lg:order-2">
                {/* Status Badge */}
                <div className="mb-4 sm:mb-6">
                  <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                    isUpcoming 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {isUpcoming ? 'Akan Datang' : 'Selesai'}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                  {program.title}
                </h1>

                {/* Description */}
                <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                  {program.description}
                </p>

                {/* Program Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  <div className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg">
                    <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 flex-shrink-0" />
                    <div className="min-w-0">
                      <h3 className="font-medium text-gray-900 text-sm sm:text-base">Tanggal</h3>
                      <p className="text-gray-600 text-sm sm:text-base">
                        {new Date(program.date).toLocaleDateString("id-ID", {
                          weekday: "long",
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 flex-shrink-0" />
                    <div className="min-w-0">
                      <h3 className="font-medium text-gray-900 text-sm sm:text-base">Waktu</h3>
                      <p className="text-gray-600 text-sm sm:text-base">{program.time}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg sm:col-span-2 lg:col-span-1 xl:col-span-2">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 flex-shrink-0" />
                    <div className="min-w-0">
                      <h3 className="font-medium text-gray-900 text-sm sm:text-base">Lokasi</h3>
                      <p className="text-gray-600 text-sm sm:text-base">{program.location}</p>
                    </div>
                  </div>

                  {program.speaker && program.speaker !== "-" && program.speaker !== "TBA" && (
                    <div className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg sm:col-span-2 lg:col-span-1 xl:col-span-2">
                      <Users className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 flex-shrink-0" />
                      <div className="min-w-0">
                        <h3 className="font-medium text-gray-900 text-sm sm:text-base">Pembicara</h3>
                        <p className="text-gray-600 text-sm sm:text-base">{program.speaker}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  {isUpcoming && (
                    <>
                      <Button asChild size="lg" className="bg-red-800 hover:bg-red-900">
                        <Link href="/pendaftaran">
                          Daftar Sekarang
                        </Link>
                      </Button>
                      <Button size="lg" variant="outline" className="border-gray-300">
                        <Share2 className="w-4 h-4 mr-2" />
                        Bagikan Program
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Content */}
      <section className="py-8 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 lg:p-12">
              {/* Program Agenda */}
              <div className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Agenda Kegiatan</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-red-800 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Pembukaan & Perkenalan</h4>
                      <p className="text-gray-600 text-sm">Sambutan dan pengenalan tema</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-red-800 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Sesi Utama</h4>
                      <p className="text-gray-600 text-sm">Presentasi materi dan diskusi interaktif</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-red-800 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Sesi Tanya Jawab</h4>
                      <p className="text-gray-600 text-sm">Diskusi terbuka dengan peserta</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-red-800 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Penutupan & Networking</h4>
                      <p className="text-gray-600 text-sm">Kesimpulan dan sesi networking</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Requirements for Upcoming Programs */}
              {isUpcoming && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-red-900 mb-3">Persyaratan Peserta</h3>
                  <ul className="space-y-2 text-red-800">
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Mengisi formulir pendaftaran</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Membawa alat tulis</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Berkomitmen mengikuti seluruh agenda</span>
                    </li>
                  </ul>
                </div>
              )}

              {/* Organizer Info */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Penyelenggara</h3>
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-8 h-8 text-red-800" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900 mb-2">
                      Unit Kegiatan Mahasiswa Advokasi
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      UKM Advokasi adalah wadah bagi mahasiswa untuk mempelajari hukum dan advokasi. 
                      Kami berkomitmen untuk menyelenggarakan program-program berkualitas yang dapat 
                      memberikan manfaat bagi pengembangan intelektual mahasiswa.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Programs */}
      {relatedPrograms.length > 0 && (
        <section className="py-8 sm:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
                Program Lainnya
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {relatedPrograms.map((relatedProgram) => (
                  <div
                    key={relatedProgram.id}
                    className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                      <Image
                        src={relatedProgram.image}
                        alt={relatedProgram.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-red-800 text-white text-xs px-3 py-1 rounded-full font-medium">
                          {relatedProgram.category}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                          relatedProgram.status === 'upcoming' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {relatedProgram.status === 'upcoming' ? 'Akan Datang' : 'Selesai'}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Calendar className="w-4 h-4 mr-1 flex-shrink-0" />
                        <span>
                          {new Date(relatedProgram.date).toLocaleDateString("id-ID", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </span>
                      </div>

                      <h3 className="font-semibold text-lg text-gray-900 mb-3 line-clamp-2">
                        {relatedProgram.title}
                      </h3>

                      <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
                        {relatedProgram.description}
                      </p>

                      <Link
                        href={`/program-kerja/${relatedProgram.id}`}
                        className="inline-flex items-center text-red-800 hover:text-red-900 font-medium transition-colors text-sm"
                      >
                        Lihat Detail
                        <ArrowLeft className="ml-1 w-4 h-4 rotate-180" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
