"use client";

import { useState } from "react";
import Link from "next/link";
import { User, Mail, Phone, MapPin, FileText, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ORGANIZATION_INFO } from "@/lib/data/constants";

export default function PendaftaranPage() {
  const [formData, setFormData] = useState({
    namaLengkap: "",
    nim: "",
    email: "",
    telepon: "",
    alamat: "",
    programStudi: "",
    semester: "",
    motivasi: "",
    pengalaman: "",
    komitmen: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-20">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Pendaftaran Berhasil!
          </h1>
          <p className="text-gray-600 mb-6">
            Terima kasih telah mendaftar. Tim kami akan segera menghubungi Anda untuk tahap selanjutnya.
          </p>
          <Button asChild className="bg-red-800 hover:bg-red-900">
            <Link href="/">Kembali ke Beranda</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-800 to-red-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Pendaftaran Anggota
            </h1>
            <p className="text-xl text-red-100 mb-8">
              Bergabunglah dengan {ORGANIZATION_INFO.shortName} dan jadilah bagian dari komunitas yang peduli hukum dan keadilan
            </p>
            
            {/* Benefits */}
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <User className="w-8 h-8 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Pengembangan Diri</h3>
                <p className="text-sm text-red-100">Tingkatkan kemampuan analitis dan public speaking</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <FileText className="w-8 h-8 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Publikasi Karya</h3>
                <p className="text-sm text-red-100">Platform untuk menerbitkan artikel dan kajian hukum</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <MapPin className="w-8 h-8 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Jaringan Luas</h3>
                <p className="text-sm text-red-100">Bangun koneksi dengan praktisi dan akademisi hukum</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              {/* Form Header */}
              <div className="bg-gray-50 px-8 py-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Formulir Pendaftaran
                </h2>
                <p className="text-gray-600">
                  Lengkapi data diri Anda dengan benar dan lengkap
                </p>
              </div>

              {/* Form Content */}
              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                {/* Data Pribadi */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <User className="w-5 h-5 mr-2 text-red-800" />
                    Data Pribadi
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="namaLengkap" className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        id="namaLengkap"
                        name="namaLengkap"
                        value={formData.namaLengkap}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent"
                        placeholder="Masukkan nama lengkap"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="nim" className="block text-sm font-medium text-gray-700 mb-2">
                        NIM *
                      </label>
                      <input
                        type="text"
                        id="nim"
                        name="nim"
                        value={formData.nim}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent"
                        placeholder="Masukkan NIM"
                      />
                    </div>
                  </div>
                </div>

                {/* Kontak */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Mail className="w-5 h-5 mr-2 text-red-800" />
                    Informasi Kontak
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent"
                        placeholder="contoh@email.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="telepon" className="block text-sm font-medium text-gray-700 mb-2">
                        Nomor Telepon *
                      </label>
                      <input
                        type="tel"
                        id="telepon"
                        name="telepon"
                        value={formData.telepon}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent"
                        placeholder="08xxxxxxxxxx"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <label htmlFor="alamat" className="block text-sm font-medium text-gray-700 mb-2">
                      Alamat Lengkap *
                    </label>
                    <textarea
                      id="alamat"
                      name="alamat"
                      value={formData.alamat}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent"
                      placeholder="Masukkan alamat lengkap"
                    />
                  </div>
                </div>

                {/* Data Akademik */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-red-800" />
                    Data Akademik
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="programStudi" className="block text-sm font-medium text-gray-700 mb-2">
                        Program Studi *
                      </label>
                      <select
                        id="programStudi"
                        name="programStudi"
                        value={formData.programStudi}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent"
                      >
                        <option value="">Pilih Program Studi</option>
                        <option value="hukum">Ilmu Hukum</option>
                        <option value="administrasi-negara">Administrasi Negara</option>
                        <option value="ekonomi">Ekonomi</option>
                        <option value="manajemen">Manajemen</option>
                        <option value="akuntansi">Akuntansi</option>
                        <option value="lainnya">Lainnya</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="semester" className="block text-sm font-medium text-gray-700 mb-2">
                        Semester *
                      </label>
                      <select
                        id="semester"
                        name="semester"
                        value={formData.semester}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent"
                      >
                        <option value="">Pilih Semester</option>
                        <option value="1">Semester 1</option>
                        <option value="2">Semester 2</option>
                        <option value="3">Semester 3</option>
                        <option value="4">Semester 4</option>
                        <option value="5">Semester 5</option>
                        <option value="6">Semester 6</option>
                        <option value="7">Semester 7</option>
                        <option value="8">Semester 8</option>
                        <option value="9+">Semester 9+</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Motivasi & Komitmen */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Motivasi & Komitmen
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="motivasi" className="block text-sm font-medium text-gray-700 mb-2">
                        Motivasi bergabung dengan UKM Advokasi *
                      </label>
                      <textarea
                        id="motivasi"
                        name="motivasi"
                        value={formData.motivasi}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent"
                        placeholder="Ceritakan motivasi dan alasan Anda ingin bergabung..."
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="pengalaman" className="block text-sm font-medium text-gray-700 mb-2">
                        Pengalaman organisasi atau kegiatan terkait hukum
                      </label>
                      <textarea
                        id="pengalaman"
                        name="pengalaman"
                        value={formData.pengalaman}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent"
                        placeholder="Opsional: Ceritakan pengalaman organisasi atau kegiatan terkait hukum yang pernah diikuti..."
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="komitmen" className="block text-sm font-medium text-gray-700 mb-2">
                        Komitmen waktu yang dapat diberikan *
                      </label>
                      <select
                        id="komitmen"
                        name="komitmen"
                        value={formData.komitmen}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent"
                      >
                        <option value="">Pilih komitmen waktu</option>
                        <option value="5-10-jam">5-10 jam per minggu</option>
                        <option value="10-15-jam">10-15 jam per minggu</option>
                        <option value="15-20-jam">15-20 jam per minggu</option>
                        <option value="20-jam-plus">Lebih dari 20 jam per minggu</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Terms & Conditions */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Syarat dan Ketentuan:</h4>
                  <ul className="text-sm text-gray-600 space-y-2 mb-4">
                    <li>• Bersedia mengikuti seluruh rangkaian proses seleksi</li>
                    <li>• Berkomitmen aktif dalam kegiatan organisasi</li>
                    <li>• Menjunjung tinggi nilai-nilai dan kode etik UKM Advokasi</li>
                    <li>• Bersedia mengikuti program pengembangan anggota</li>
                  </ul>
                  
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      className="mt-1 w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                    />
                    <span className="text-sm text-gray-700">
                      Saya menyetujui syarat dan ketentuan yang berlaku dan bersedia menjalani proses seleksi anggota UKM Advokasi
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-red-800 hover:bg-red-900 disabled:opacity-50 disabled:cursor-not-allowed py-4 text-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Mengirim Pendaftaran...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Kirim Pendaftaran
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Butuh Bantuan?</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-red-600" />
                  <span className="text-sm text-gray-600">advokasiutbogor@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-red-600" />
                  <span className="text-sm text-gray-600">083804720979</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
