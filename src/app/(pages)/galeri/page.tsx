import { Camera, Play, Image as ImageIcon, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GaleriPage() {
  // Sample gallery data
  const galleryAlbums = [
    {
      id: "1",
      title: "Diskusi Hukum Bulanan - Januari 2025",
      date: "2025-01-15",
      type: "photo",
      thumbnail: "/images/gallery/diskusi-jan.jpg",
      count: 24,
      description: "Dokumentasi diskusi hukum dengan tema 'Perkembangan Hukum Digital di Indonesia'",
    },
    {
      id: "2",
      title: "Workshop Penulisan Hukum",
      date: "2024-12-20",
      type: "video",
      thumbnail: "/images/gallery/workshop-penulisan.jpg",
      count: 1,
      description: "Video dokumentasi workshop teknik penulisan karya ilmiah hukum",
    },
    {
      id: "3",
      title: "Seminar Hukum dan Teknologi",
      date: "2024-12-10",
      type: "photo",
      thumbnail: "/images/gallery/seminar-teknologi.jpg",
      count: 36,
      description: "Seminar dengan pembicara praktisi hukum dan teknologi terkemuka",
    },
    {
      id: "4",
      title: "Kunjungan ke Mahkamah Konstitusi",
      date: "2024-11-25",
      type: "photo",
      thumbnail: "/images/gallery/mk-visit.jpg",
      count: 45,
      description: "Kunjungan edukasi ke Mahkamah Konstitusi RI bersama anggota UKM",
    },
    {
      id: "5",
      title: "Pengabdian Masyarakat - Penyuluhan Hukum",
      date: "2024-11-10",
      type: "photo",
      thumbnail: "/images/gallery/pengabdian.jpg",
      count: 28,
      description: "Kegiatan penyuluhan hukum kepada masyarakat di sekitar kampus",
    },
    {
      id: "6",
      title: "Rapat Kerja Kabinet Prometheus Aletheia",
      date: "2024-10-30",
      type: "photo",
      thumbnail: "/images/gallery/raker.jpg",
      count: 18,
      description: "Rapat kerja perencanaan program kerja periode 2024-2025",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-800 to-red-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Galeri
            </h1>
            <p className="text-xl text-red-100 mb-8">
              Dokumentasi kegiatan dan momen berharga UKM Advokasi
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">{galleryAlbums.length}</div>
                <div className="text-red-200 text-sm">Album</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">
                  {galleryAlbums.reduce((total, album) => total + album.count, 0)}
                </div>
                <div className="text-red-200 text-sm">Foto & Video</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">3+</div>
                <div className="text-red-200 text-sm">Tahun Dokumentasi</div>
              </div>
            </div>
          </div>
        </div>
      </section>

 

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryAlbums.map((album) => (
                <div
                  key={album.id}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
                >
                  {/* Album Thumbnail */}
                  <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    
                    {/* Type indicator */}
                    <div className="absolute top-4 left-4">
                      <span className={`flex items-center space-x-1 px-3 py-1 rounded-full text-white text-xs font-medium ${
                        album.type === 'video' 
                          ? 'bg-red-600' 
                          : 'bg-blue-600'
                      }`}>
                        {album.type === 'video' ? (
                          <Play className="w-3 h-3" />
                        ) : (
                          <Camera className="w-3 h-3" />
                        )}
                        <span>{album.type === 'video' ? 'Video' : 'Foto'}</span>
                      </span>
                    </div>

                    {/* Count indicator */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-black/50 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                        {album.count} {album.type === 'video' ? 'video' : 'foto'}
                      </span>
                    </div>

                    {/* Play button for videos */}
                    {album.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                          <Play className="w-8 h-8 text-red-600 ml-1" />
                        </div>
                      </div>
                    )}

                    {/* Date and participants info */}
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {new Date(album.date).toLocaleDateString("id-ID", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>UKM Advokasi</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Album Info */}
                  <div className="p-6">
                    <h3 className="font-semibold text-lg text-gray-900 mb-3 line-clamp-2">
                      {album.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {album.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        {new Date(album.date).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </div>
                      
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-red-200 text-red-800 hover:bg-red-50"
                      >
                        {album.type === 'video' ? 'Tonton' : 'Lihat Album'}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="border-red-200 text-red-800 hover:bg-red-50">
                Muat Lebih Banyak Album
              </Button>
            </div>
          </div>
        </div>
      </section>

    

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ingin Menjadi Bagian dari Momen Berharga?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan UKM Advokasi dan ciptakan momen-momen berkesan bersama kami
          </p>
          <Button asChild size="lg" className="bg-red-800 hover:bg-red-900">
            <a href="/pendaftaran">
              Bergabung Sekarang
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
