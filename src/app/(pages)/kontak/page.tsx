import { Mail, Phone, MapPin, Clock, Instagram, MessageCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ORGANIZATION_INFO, CONTACT_INFO } from "@/lib/data/constants";

export default function KontakPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-800 to-red-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Hubungi Kami
            </h1>
            <p className="text-xl text-red-100 mb-8">
              Kami siap membantu dan menjawab pertanyaan Anda tentang {ORGANIZATION_INFO.shortName}
            </p>
            
            {/* Quick Contact */}
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors group"
              >
                <Mail className="w-8 h-8 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-sm text-red-100">{CONTACT_INFO.email}</p>
              </a>
              
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors group"
              >
                <Phone className="w-8 h-8 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-1">Telepon</h3>
                <p className="text-sm text-red-100">{CONTACT_INFO.phone}</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Details */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Informasi Kontak
                </h2>
                
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-red-800" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-1">Email Resmi</h3>
                      <p className="text-gray-600 mb-2">Untuk pertanyaan umum dan informasi</p>
                      <a
                        href={`mailto:${CONTACT_INFO.email}`}
                        className="text-red-800 hover:text-red-900 font-medium inline-flex items-center"
                      >
                        {CONTACT_INFO.email}
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-red-800" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-1">Telepon</h3>
                      <p className="text-gray-600 mb-2">Hubungi langsung pengurus</p>
                      <a
                        href={`tel:${CONTACT_INFO.phone}`}
                        className="text-red-800 hover:text-red-900 font-medium inline-flex items-center"
                      >
                        {CONTACT_INFO.phone}
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-red-800" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-1">Lokasi</h3>
                      <p className="text-gray-600 mb-2">Alamat kampus dan sekretariat</p>
                      <p className="text-red-800 font-medium">
                        {ORGANIZATION_INFO.university}
                      </p>
                      <p className="text-gray-600 text-sm">
                        Jl. Raya Bogor-Jakarta KM 28, Ciputat, Tangerang Selatan
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-red-800" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-1">Jam Operasional</h3>
                      <p className="text-gray-600 mb-2">Waktu terbaik untuk menghubungi kami</p>
                      <div className="space-y-1 text-sm text-gray-700">
                        <p>Senin - Jumat: 08.00 - 17.00 WIB</p>
                        <p>Sabtu: 08.00 - 12.00 WIB</p>
                        <p>Minggu: Tutup</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Media Sosial</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {/* Instagram */}
                    <a
                      href={`https://instagram.com/${CONTACT_INFO.social.instagram.replace("@", "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow group"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <Instagram className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 group-hover:text-purple-600">Instagram</h4>
                        <p className="text-sm text-gray-600">{CONTACT_INFO.social.instagram}</p>
                      </div>
                    </a>

                    {/* WhatsApp */}
                    <a
                      href={CONTACT_INFO.social.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow group"
                    >
                      <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                        <MessageCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 group-hover:text-green-600">WhatsApp</h4>
                        <p className="text-sm text-gray-600">Channel Resmi</p>
                      </div>
                    </a>

                    {/* Twitter/X */}
                    <a
                      href={`https://twitter.com/${CONTACT_INFO.social.twitter.replace("@", "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow group"
                    >
                      <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 group-hover:text-gray-700">Twitter/X</h4>
                        <p className="text-sm text-gray-600">{CONTACT_INFO.social.twitter}</p>
                      </div>
                    </a>

                    {/* Threads */}
                    <a
                      href={`https://threads.net/${CONTACT_INFO.social.threads.replace("@", "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow group"
                    >
                      <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-lg">@</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 group-hover:text-gray-700">Threads</h4>
                        <p className="text-sm text-gray-600">{CONTACT_INFO.social.threads}</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Kirim Pesan
                  </h2>
                  
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="nama" className="block text-sm font-medium text-gray-700 mb-2">
                          Nama Lengkap *
                        </label>
                        <input
                          type="text"
                          id="nama"
                          name="nama"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent"
                          placeholder="Masukkan nama lengkap"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent"
                          placeholder="contoh@email.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subjek" className="block text-sm font-medium text-gray-700 mb-2">
                        Subjek *
                      </label>
                      <input
                        type="text"
                        id="subjek"
                        name="subjek"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent"
                        placeholder="Topik pesan Anda"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="pesan" className="block text-sm font-medium text-gray-700 mb-2">
                        Pesan *
                      </label>
                      <textarea
                        id="pesan"
                        name="pesan"
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent"
                        placeholder="Tulis pesan Anda di sini..."
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-red-800 hover:bg-red-900 py-3">
                      Kirim Pesan
                    </Button>
                  </form>
                </div>

                {/* FAQ Quick Links */}
                <div className="mt-8 bg-gray-100 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Pertanyaan Umum</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-gray-800 text-sm">Bagaimana cara bergabung?</h4>
                      <p className="text-gray-600 text-sm">Isi formulir pendaftaran di halaman Pendaftaran</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 text-sm">Kapan rekrutmen anggota baru?</h4>
                      <p className="text-gray-600 text-sm">Setiap awal semester ganjil dan genap</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 text-sm">Apakah ada biaya pendaftaran?</h4>
                      <p className="text-gray-600 text-sm">Tidak ada biaya pendaftaran</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Lokasi Kampus
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {ORGANIZATION_INFO.university}
            </p>
            
            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">Peta lokasi kampus</p>
                <p className="text-gray-400 text-sm">Google Maps akan ditampilkan di sini</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
