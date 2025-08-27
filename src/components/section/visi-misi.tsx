"use client";

import { Target, Eye, Heart } from "lucide-react";

export default function VisiMisi() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Visi & Misi
            </h2>
            <p className="text-lg text-gray-600">
              Fondasi dan arah pergerakan UKM Advokasi
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Visi */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-red-800">Visi</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Menjadi wadah pengembangan minat dan bakat mahasiswa dalam bidang hukum 
                dan advokasi yang unggul, profesional, dan berintegritas tinggi untuk 
                mewujudkan keadilan sosial bagi seluruh masyarakat Indonesia.
              </p>
            </div>

            {/* Misi */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Misi</h3>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start space-x-3">
                  <Heart className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <span>Menyelenggarakan kegiatan pendidikan dan pelatihan hukum yang berkualitas</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Heart className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <span>Membangun kesadaran hukum dan HAM di lingkungan kampus dan masyarakat</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Heart className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <span>Mengembangkan kemampuan advokasi dan mediasi untuk keadilan sosial</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Heart className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <span>Menciptakan jaringan kolaborasi dengan institusi hukum dan HAM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
