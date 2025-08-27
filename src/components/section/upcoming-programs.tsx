import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, Clock, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SAMPLE_PROGRAMS } from "@/lib/data/constants";

export default function UpcomingPrograms() {
  const upcomingPrograms = SAMPLE_PROGRAMS.filter(program => program.status === 'upcoming');
  const completedPrograms = SAMPLE_PROGRAMS.filter(program => program.status === 'completed').slice(0, 2);

  // If no upcoming programs, show completed ones
  const programsToShow = upcomingPrograms.length > 0 ? upcomingPrograms : completedPrograms;
  const isShowingCompleted = upcomingPrograms.length === 0;

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-red-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 bg-red-50 border border-red-200 rounded-full px-4 py-2 mb-4">
            <Zap className="w-4 h-4 text-red-600" />
            <span className="text-red-800 text-sm font-medium">
              {isShowingCompleted ? 'Program Terbaru' : 'Agenda Terdekat'}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {isShowingCompleted ? 'Program Terlaksana' : 'Program Mendatang'}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            {isShowingCompleted 
              ? 'Lihat program-program yang telah berhasil dilaksanakan'
              : 'Jangan lewatkan program-program menarik yang akan datang'
            }
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 sm:mb-12">
          {programsToShow.map((program) => (
            <div
              key={program.id}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              {/* Program Image */}
              <div className="aspect-[4/5] bg-gradient-to-br from-red-100 to-red-200 relative overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-red-800 text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg">
                    {program.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`text-xs px-2 py-1 rounded-full font-medium shadow-lg ${
                    program.status === 'upcoming' 
                      ? 'bg-green-500 text-white' 
                      : 'bg-gray-500 text-white'
                  }`}>
                    {program.status === 'upcoming' ? 'Akan Datang' : 'Selesai'}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-bold text-lg text-white mb-2 line-clamp-2 group-hover:text-red-200 transition-colors">
                    {program.title}
                  </h3>
                </div>
              </div>

              {/* Program Content */}
              <div className="p-4 sm:p-6">
                <p className="text-gray-600 mb-4 line-clamp-2 text-sm sm:text-base leading-relaxed">
                  {program.description}
                </p>

                {/* Program Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-xs sm:text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2 text-red-600 flex-shrink-0" />
                    <span className="truncate">
                      {new Date(program.date).toLocaleDateString("id-ID", {
                        weekday: "long",
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-2 text-red-600 flex-shrink-0" />
                    <span>{program.time}</span>
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2 text-red-600 flex-shrink-0" />
                    <span className="truncate">{program.location}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Link
                    href={`/program-kerja/${program.id}`}
                    className="flex-1 inline-flex items-center justify-center text-red-800 hover:text-red-900 font-medium transition-colors text-sm group bg-red-50 hover:bg-red-100 rounded-lg px-4 py-2"
                  >
                    Lihat Detail
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  {program.status === 'upcoming' && (
                    <Link
                      href="/pendaftaran"
                      className="inline-flex items-center justify-center bg-red-800 hover:bg-red-900 text-white font-medium rounded-lg px-4 py-2 text-sm transition-colors shadow-md hover:shadow-lg"
                    >
                      Daftar
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            asChild 
            variant="outline" 
            size="lg" 
            className="border-red-200 text-red-800 hover:bg-red-50 hover:border-red-300 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <Link href="/program-kerja">
              Lihat Semua Program
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
