import { Calendar, MapPin, Users } from "lucide-react";
import { ORGANIZATION_INFO } from "@/lib/data/constants";

export default function SejarahPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-800 to-red-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Sejarah {ORGANIZATION_INFO.shortName}
            </h1>
            <p className="text-xl text-red-100">
              Perjalanan panjang membangun tradisi intelektual di kampus
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Pendirian */}
            <div className="bg-white rounded-xl shadow-sm p-8 mb-8 border border-gray-200">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-red-800" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Hari Pendirian</h2>
                  <p className="text-red-800 font-medium">{ORGANIZATION_INFO.established}</p>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-lg leading-relaxed mb-6">
                  Pada <strong>Minggu, 24 Oktober 2021</strong>, lahirlah sebuah unit kegiatan mahasiswa yang 
                  akan menjadi wadah bagi para mahasiswa Universitas Terbuka Bogor untuk mempelajari hukum 
                  dan advokasi. Unit Kegiatan Mahasiswa Advokasi (UKM ADVO) didirikan dengan semangat untuk 
                  menciptakan generasi mahasiswa yang cerdas, kritis, dan berintegritas.
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  Pendirian UKM Advokasi dilatarbelakangi oleh kebutuhan akan wadah yang dapat mengakomodasi 
                  minat dan bakat mahasiswa di bidang hukum dan advokasi. Di tengah dinamika kehidupan 
                  berbangsa dan bernegara yang semakin kompleks, diperlukan generasi muda yang memahami 
                  hukum dan mampu beradvokasi untuk keadilan.
                </p>
              </div>
            </div>

            {/* Visi Awal */}
            <div className="bg-white rounded-xl shadow-sm p-8 mb-8 border border-gray-200">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-red-800" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Visi Awal Pendirian</h2>
                  <p className="text-gray-600">Cita-cita para pendiri</p>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-lg leading-relaxed mb-6">
                  Para pendiri UKM Advokasi memiliki visi untuk menciptakan sebuah organisasi yang tidak hanya 
                  mengajarkan teori hukum, tetapi juga mengembangkan kemampuan praktis dalam beradvokasi. 
                  Organisasi ini diharapkan dapat menjadi jembatan antara dunia akademis dan praktek hukum 
                  yang sesungguhnya.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Dengan motto <strong>&quot;Makhluk Pilihan Tuhan&quot;</strong>, UKM Advokasi bertekad untuk mencetak 
                  anggota-anggota yang tidak hanya cerdas secara intelektual, tetapi juga memiliki moral dan 
                  etika yang tinggi dalam menjalankan setiap aktivitas.
                </p>
              </div>
            </div>

            {/* Perkembangan */}
            <div className="bg-white rounded-xl shadow-sm p-8 mb-8 border border-gray-200">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-red-800" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Perkembangan & Prestasi</h2>
                  <p className="text-gray-600">Pencapaian yang telah diraih</p>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-lg leading-relaxed mb-6">
                  Sejak berdiri, UKM Advokasi telah mengalami perkembangan yang signifikan. Berbagai program 
                  kerja telah dilaksanakan, mulai dari diskusi hukum rutin, seminar, workshop, hingga 
                  pengabdian masyarakat yang berkaitan dengan penyuluhan hukum.
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  Organisasi ini juga telah berhasil menanamkan budaya diskusi dan membaca di kalangan 
                  anggotanya. Hal ini terbukti dari berbagai publikasi artikel dan kajian hukum yang 
                  dihasilkan oleh para anggota.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Pada periode kepemimpinan <strong>Kabinet Prometheus Aletheia</strong>, UKM Advokasi 
                  semakin memperkuat komitmennya untuk menjadi wadah pengembangan intelektualitas mahasiswa 
                  di bidang hukum dan advokasi.
                </p>
              </div>
            </div>

            
          </div>
        </div>
      </section>
    </div>
  );
}
