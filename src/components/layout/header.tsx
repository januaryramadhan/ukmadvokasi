"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { ORGANIZATION_INFO, NAVIGATION_ITEMS } from "@/lib/data/constants";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <header className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-4">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-red-800 rounded-full flex items-center justify-center">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-xl text-gray-900">
                {ORGANIZATION_INFO.shortName}
              </h1>
              <p className="text-sm text-gray-600">
                {ORGANIZATION_INFO.kabinet}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAVIGATION_ITEMS.map((item) => (
              <div key={item.label} className="relative group">
                {"children" in item ? (
                  <div>
                    <button className="flex items-center space-x-1 text-gray-700 hover:text-red-800 transition-colors font-medium">
                      <span>{item.label}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-800 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-red-800 transition-colors font-medium"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild className="bg-red-800 hover:bg-red-900">
              <Link href="/pendaftaran">Daftar Sekarang</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-red-800 hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-200">
            <nav className="pt-4 space-y-2">
              {NAVIGATION_ITEMS.map((item) => (
                <div key={item.label}>
                  {"children" in item ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.label)}
                        className="flex items-center justify-between w-full px-3 py-2 text-left text-gray-700 hover:text-red-800 hover:bg-gray-50 rounded-md transition-colors"
                      >
                        <span className="font-medium">{item.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            activeDropdown === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {activeDropdown === item.label && (
                        <div className="ml-4 mt-2 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="block px-3 py-2 text-sm text-gray-600 hover:text-red-800 hover:bg-gray-50 rounded-md transition-colors"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-gray-700 hover:text-red-800 hover:bg-gray-50 rounded-md transition-colors font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-200 mt-4">
                <Button asChild className="w-full bg-red-800 hover:bg-red-900">
                  <Link href="/pendaftaran" onClick={() => setIsMenuOpen(false)}>
                    Daftar Sekarang
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
