import Link from "next/link";
import { ArrowRight, Users, BookOpen, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ORGANIZATION_INFO } from "@/lib/data/constants";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-red-800 to-red-900 text-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <span className="text-white text-sm font-medium">
                {ORGANIZATION_INFO.university}
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                <span className="block">{ORGANIZATION_INFO.name}</span>
                <span className="block text-yellow-400 text-2xl sm:text-3xl lg:text-4xl mt-2">
                  {ORGANIZATION_INFO.kabinet}
                </span>
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl text-red-100 font-medium max-w-2xl mx-auto lg:mx-0">
                {ORGANIZATION_INFO.tagline}
              </p>

              <blockquote className="text-base sm:text-lg lg:text-xl text-red-200 italic border-l-4 border-yellow-400 pl-4 max-w-xl mx-auto lg:mx-0">
                &quot;{ORGANIZATION_INFO.slogan}&quot;
              </blockquote>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-red-900 font-bold text-base sm:text-lg px-6 sm:px-8 shadow-lg transition-colors duration-200"
              >
                <Link href="/pendaftaran">
                  Bergabung Sekarang
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-base sm:text-lg px-6 sm:px-8 border-white/30 text-blue-950 hover:bg-white/10 hover:border-white/50 transition-colors duration-200"
              >
                <Link href="/profil">Pelajari Lebih Lanjut</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
                </div>
                <h3 className="font-bold text-xl sm:text-2xl text-white">150+</h3>
                <p className="text-xs sm:text-sm text-red-200">Anggota Aktif</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center mx-auto mb-2">
                  <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
                </div>
                <h3 className="font-bold text-xl sm:text-2xl text-white">25+</h3>
                <p className="text-xs sm:text-sm text-red-200">Kegiatan & Artikel</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
                </div>
                <h3 className="font-bold text-xl sm:text-2xl text-white">3+</h3>
                <p className="text-xs sm:text-sm text-red-200">Tahun Berdiri</p>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 sm:p-8 lg:p-12 shadow-2xl">
            

              {/* Content */}
              <div className="relative z-10 text-white text-center space-y-4 sm:space-y-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <Image
                    src="/images/logo.png"
                    alt="Logo UKM Advokasi"
                    width={500}
                    height={500}
                    className="object-contain w-10 h-10 sm:w-12 sm:h-12"
                  />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold">
                    Sejak {ORGANIZATION_INFO.established}
                  </h3>
                  <p className="text-red-100 text-sm sm:text-base">
                    Membangun tradisi intelektual dan advokasi di lingkungan
                    kampus
                  </p>
                </div>

                <div className="bg-white/10 rounded-lg p-3 sm:p-4 backdrop-blur-sm border border-white/20">
                  <p className="text-xs sm:text-sm text-red-100">
                    Bergabunglah dengan komunitas mahasiswa yang peduli terhadap
                    isu hukum dan keadilan sosial
                  </p>
                </div>
              </div>
            </div>

            {/* Floating elements - static for better UX */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
              <div className="w-full h-full bg-white/5 rounded-full opacity-30 scale-125"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
