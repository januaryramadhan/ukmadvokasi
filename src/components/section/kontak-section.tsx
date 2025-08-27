"use client";

import Link from "next/link";
import { Mail, Phone, Instagram, MessageCircle, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT_INFO, ORGANIZATION_INFO } from "@/lib/data/constants";

export default function KontakSection() {
  return (
    <section className="py-16 bg-red-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Hubungi Kami
            </h2>
            <p className="text-xl text-red-100">
              Mari bergabung dan berkembang bersama UKM Advokasi
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-6">
                Informasi Kontak
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email</h4>
                    <a 
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-red-100 hover:text-white transition-colors"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Telepon</h4>
                    <a 
                      href={`tel:${CONTACT_INFO.phone}`}
                      className="text-red-100 hover:text-white transition-colors"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Instagram</h4>
                    <a 
                      href={`https://instagram.com/${CONTACT_INFO.social.instagram.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-100 hover:text-white transition-colors"
                    >
                      {CONTACT_INFO.social.instagram}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">WhatsApp Channel</h4>
                    <a 
                      href={CONTACT_INFO.social.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-100 hover:text-white transition-colors"
                    >
                      Join Channel
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Lokasi</h4>
                    <p className="text-red-100">
                      {ORGANIZATION_INFO.university}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">
                Bergabung dengan Kami
              </h3>
              <p className="text-red-100 mb-6 leading-relaxed">
                Tertarik menjadi bagian dari UKM Advokasi? Kami terbuka untuk 
                mahasiswa yang ingin belajar tentang hukum, advokasi, dan HAM. 
                Mari bersama-sama mengembangkan kemampuan dan berkontribusi 
                untuk keadilan sosial.
              </p>

              <div className="space-y-4">
                <Button asChild size="lg" className="w-full bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold">
                  <Link href="/pendaftaran">
                    Daftar Sekarang
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                
                <Button asChild variant="outline" size="lg" className="w-full border-white/30 text-white hover:bg-white/10">
                  <Link href="/kontak">
                    Informasi Lengkap
                  </Link>
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="mt-8 pt-6 border-t border-white/20">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-white mb-1">{ORGANIZATION_INFO.established}</div>
                    <div className="text-red-200 text-sm">Tahun Berdiri</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white mb-1">30+</div>
                    <div className="text-red-200 text-sm">Anggota Aktif</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
