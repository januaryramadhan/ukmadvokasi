import { Target, CheckCircle } from "lucide-react";
import { ORGANIZATION_INFO, VISI_MISI } from "@/lib/data/constants";

export default function VisiMisiPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-800 to-red-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Visi & Misi
            </h1>
            <p className="text-xl text-red-100">
              Landasan dan arah perjuangan {ORGANIZATION_INFO.shortName}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Visi */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Visi</h2>
                  <p className="text-gray-600">Cita-cita yang ingin dicapai</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-8">
                <p className="text-xl leading-relaxed text-red-900 font-medium text-center">
                  {VISI_MISI.visi}
                </p>
              </div>
            </div>

            {/* Misi */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Misi</h2>
                  <p className="text-gray-600">Langkah-langkah untuk mencapai visi</p>
                </div>
              </div>
              
              <div className="space-y-6">
                {VISI_MISI.misi.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-red-800 text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-lg text-gray-800 leading-relaxed">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Nilai-Nilai */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Nilai-Nilai Organisasi
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-red-50 rounded-lg">
                  <div className="w-12 h-12 bg-red-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">I</span>
                  </div>
                  <h3 className="font-semibold text-lg text-red-900 mb-2">Intelektualitas</h3>
                  <p className="text-red-800 text-sm">
                    Mengembangkan kemampuan berpikir kritis dan analitis
                  </p>
                </div>
                
                <div className="text-center p-6 bg-red-50 rounded-lg">
                  <div className="w-12 h-12 bg-red-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">I</span>
                  </div>
                  <h3 className="font-semibold text-lg text-red-900 mb-2">Integritas</h3>
                  <p className="text-red-800 text-sm">
                    Menjunjung tinggi kejujuran dan konsistensi nilai
                  </p>
                </div>
                
                <div className="text-center p-6 bg-red-50 rounded-lg">
                  <div className="w-12 h-12 bg-red-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">K</span>
                  </div>
                  <h3 className="font-semibold text-lg text-red-900 mb-2">Keadilan</h3>
                  <p className="text-red-800 text-sm">
                    Memperjuangkan kebenaran dan keadilan untuk semua
                  </p>
                </div>
                
                <div className="text-center p-6 bg-red-50 rounded-lg">
                  <div className="w-12 h-12 bg-red-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">S</span>
                  </div>
                  <h3 className="font-semibold text-lg text-red-900 mb-2">Solidaritas</h3>
                  <p className="text-red-800 text-sm">
                    Membangun kerjasama dan kebersamaan yang kuat
                  </p>
                </div>
                
                <div className="text-center p-6 bg-red-50 rounded-lg">
                  <div className="w-12 h-12 bg-red-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">P</span>
                  </div>
                  <h3 className="font-semibold text-lg text-red-900 mb-2">Profesionalisme</h3>
                  <p className="text-red-800 text-sm">
                    Menjalankan tugas dengan standar tinggi dan bertanggung jawab
                  </p>
                </div>
                
                <div className="text-center p-6 bg-red-50 rounded-lg">
                  <div className="w-12 h-12 bg-red-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">I</span>
                  </div>
                  <h3 className="font-semibold text-lg text-red-900 mb-2">Inovasi</h3>
                  <p className="text-red-800 text-sm">
                    Menciptakan ide-ide kreatif untuk kemajuan organisasi
                  </p>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl p-8 text-center">
              <blockquote className="text-2xl lg:text-3xl font-bold mb-4">
                &quot;{ORGANIZATION_INFO.slogan}&quot;
              </blockquote>
              <p className="text-gray-300 text-lg">
                Motto {ORGANIZATION_INFO.shortName}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
