import Image from "next/image";
import { ORGANIZATION_INFO } from "@/lib/data/constants";

// Data struktur organisasi

// Data struktur organisasi
const ORGANIZATIONAL_STRUCTURE = {
  dewanPengarah: [
    { name: "Irfan Yoga", position: "Dewan Pengarah" },
    { name: "Nilam Rimbawati", position: "Dewan Pengarah" }
  ],
  dewanPembina: [
    { name: "Edo Saputra, S.H.,M.Si", position: "Dewan Pembina" }
  ],
  pengurus: [
    { name: "Rafly Alviandi", position: "Ketua Umum", jurusan: "Sosiologi", photo: "ketua-umum.webp" },
    { name: "Nisah Rahmawati", position: "Wakil Ketua Umum", jurusan: "Ilmu Hukum", photo: "wakil-ketua.webp" },
    { name: "Alya Nur Rahmawati", position: "Sekretaris Umum", jurusan: "Ilmu Pemerintahan", photo: "sekretaris-umum.webp" },
    { name: "Clara Sailendra", position: "Bendahara Umum", jurusan: "Ilmu Hukum", photo: "bendahara-umum.webp" },
    { name: "Friska Adetia", position: "Kadiv Humas", jurusan: "Ilmu Adm. Negara", photo: "kadiv-humas.webp" },
    { name: "Elzya Suwandi", position: "Kadiv Riset & Kajian", jurusan: "Sastra Inggris", photo: "kadiv-riset-kajian.webp" },
    { name: "Juwita Putri", position: "Kadiv Medinfo", jurusan: "Ilmu Hukum", photo: "kadiv-medinfo.webp" },
    { name: "Dzaky Pathurrahman", position: "Kepala Divisi PSDM", jurusan: "Ilmu Komunikasi", photo: "kadiv-psdm.webp" }
  ]
};


export default function StrukturPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-800 to-red-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Struktur Organisasi
            </h1>
            <p className="text-xl text-red-100 mb-4">
              Susunan Kepengurusan {ORGANIZATION_INFO.kabinet}
            </p>
            <p className="text-lg text-red-200">
              {ORGANIZATION_INFO.shortName} - {ORGANIZATION_INFO.university}
            </p>
          </div>
        </div>
      </section>

      {/* Organizational Chart */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            
            {/* Dewan Pengarah */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Dewan Pengarah</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                {ORGANIZATIONAL_STRUCTURE.dewanPengarah.map((person, index) => (
                  <div key={index} className="group bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-100">
                    <div className="relative w-24 h-24 mx-auto mb-4">
                      <div className="w-full h-full rounded-2xl bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center shadow-lg ring-4 ring-red-100 group-hover:ring-red-200 transition-all duration-300">
                        <span className="text-white font-bold text-2xl">{person.name.charAt(0)}</span>
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg text-gray-900 group-hover:text-red-700 transition-colors duration-300">
                        {person.name}
                      </h3>
                      <div className="bg-red-50 px-3 py-1 rounded-full inline-block">
                        <p className="text-sm text-red-700 font-semibold">{person.position}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dewan Pembina */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Dewan Pembina</h2>
              <div className="flex justify-center max-w-2xl mx-auto">
                {ORGANIZATIONAL_STRUCTURE.dewanPembina.map((person, index) => (
                  <div key={index} className="group bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-100">
                    <div className="relative w-24 h-24 mx-auto mb-4">
                      <div className="w-full h-full rounded-2xl bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center shadow-lg ring-4 ring-red-100 group-hover:ring-red-200 transition-all duration-300">
                        <span className="text-white font-bold text-2xl">{person.name.charAt(0)}</span>
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg text-gray-900 group-hover:text-red-700 transition-colors duration-300">
                        {person.name}
                      </h3>
                      <div className="bg-red-50 px-3 py-1 rounded-full inline-block">
                        <p className="text-sm text-red-700 font-semibold">{person.position}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pengurus */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Pengurus Harian</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {ORGANIZATIONAL_STRUCTURE.pengurus.map((person, index) => (
                  <div key={index} className="group bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-100">
                    <div className="relative w-24 h-24 mx-auto mb-4">
                      <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg ring-4 ring-red-100 group-hover:ring-red-200 transition-all duration-300">
                        <Image
                          src={`/images/pengurus/${person.photo}`}
                          alt={person.name}
                          width={96}
                          height={96}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg text-gray-900 group-hover:text-red-700 transition-colors duration-300">
                        {person.name}
                      </h3>
                      <div className="bg-red-50 px-3 py-1 rounded-full inline-block">
                        <p className="text-sm text-red-700 font-semibold">{person.position}</p>
                      </div>
                      <p className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-lg inline-block">
                        {person.jurusan}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Period Info */}
            <div className="text-center mt-16">
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 max-w-md mx-auto">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Periode Kepengurusan
                </h3>
                <p className="text-lg text-red-800 font-semibold">
                  2024 - 2025
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  {ORGANIZATION_INFO.kabinet}
                </p>
              </div>
            </div>

            {/* Note */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500 italic">
                * Struktur organisasi dapat berubah sesuai dengan kebutuhan dan perkembangan organisasi
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

 