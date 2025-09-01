import Link from "next/link";
import { Mail, Phone, Instagram, MessageCircle } from "lucide-react";
import { ORGANIZATION_INFO, CONTACT_INFO, NAVIGATION_ITEMS } from "@/lib/data/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organisasi Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-red-800 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">{ORGANIZATION_INFO.shortName}</h3>
                <p className="text-sm text-gray-300">{ORGANIZATION_INFO.kabinet}</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {ORGANIZATION_INFO.tagline}
            </p>
            <p className="text-gray-400 text-xs italic">
              &quot;{ORGANIZATION_INFO.slogan}&quot;
            </p>
          </div>

          {/* Navigasi Cepat */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Navigasi Cepat</h4>
            <ul className="space-y-2">
              {NAVIGATION_ITEMS.slice(0, 4).map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Layanan</h4>
            <ul className="space-y-2">
              {NAVIGATION_ITEMS.slice(4).map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Hubungi Kami</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-red-400" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-red-400" />
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="font-medium mb-3">Media Sosial</h5>
              <div className="flex space-x-4">
                <a
                  href={`https://instagram.com/${CONTACT_INFO.social.instagram.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href={`https://twitter.com/${CONTACT_INFO.social.twitter.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Twitter/X"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href={CONTACT_INFO.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} {ORGANIZATION_INFO.name}. All rights reserved. Made with ❤️ by{" "}
              <a 
                href="https://januaryramadhan.works" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-red-400 hover:text-red-300 transition-colors font-medium"
              >
                January
              </a>
            </p>
            <p className="text-gray-400 text-sm text-center md:text-right">
              {ORGANIZATION_INFO.university}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
