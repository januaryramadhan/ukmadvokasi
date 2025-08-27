import Link from "next/link";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SAMPLE_ARTICLES } from "@/lib/data/constants";

export default function PublikasiPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-800 to-red-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Publikasi
            </h1>
            <p className="text-xl text-red-100 mb-2">
              Kumpulan artikel dan kajian hukum dari anggota UKM Advokasi
            </p>
          </div>
        </div>
      </section>

  
      {/* Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Featured Article */}
            {SAMPLE_ARTICLES.length > 0 && (
              <div className="mb-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  Artikel Unggulan
                </h2>
                
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                  <div className="grid lg:grid-cols-2">
                    {/* Image */}
                    <div className="h-64 lg:h-auto bg-gradient-to-br from-red-100 to-red-200 relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-red-800 text-white text-sm px-3 py-1 rounded-full font-medium">
                          {SAMPLE_ARTICLES[0].category}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-8">
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <User className="w-4 h-4 mr-1" />
                        <span className="mr-4">{SAMPLE_ARTICLES[0].author}</span>
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>
                          {new Date(SAMPLE_ARTICLES[0].publishDate).toLocaleDateString("id-ID", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {SAMPLE_ARTICLES[0].title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {SAMPLE_ARTICLES[0].excerpt}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {SAMPLE_ARTICLES[0].tags.map((tag, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                          >
                            <Tag className="w-3 h-3 mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <Button asChild className="bg-red-800 hover:bg-red-900">
                        <Link href={`/publikasi/${SAMPLE_ARTICLES[0].id}`}>
                          Baca Selengkapnya
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Articles Grid */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Artikel Terbaru
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {SAMPLE_ARTICLES.slice(1).map((article) => (
                  <article
                    key={article.id}
                    className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    {/* Article Image */}
                    <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-red-800 text-white text-xs px-3 py-1 rounded-full font-medium">
                          {article.category}
                        </span>
                      </div>
                    </div>

                    {/* Article Content */}
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <User className="w-4 h-4 mr-1" />
                        <span className="mr-4">{article.author}</span>
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>
                          {new Date(article.publishDate).toLocaleDateString("id-ID", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </span>
                      </div>

                      <h3 className="font-semibold text-xl text-gray-900 mb-3 line-clamp-2">
                        {article.title}
                      </h3>

                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {article.tags.slice(0, 2).map((tag, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full"
                          >
                            <Tag className="w-3 h-3 mr-1" />
                            {tag}
                          </span>
                        ))}
                        {article.tags.length > 2 && (
                          <span className="text-xs text-gray-500">
                            +{article.tags.length - 2} lainnya
                          </span>
                        )}
                      </div>

                      <Link
                        href={`/publikasi/${article.id}`}
                        className="inline-flex items-center text-red-800 hover:text-red-900 font-medium transition-colors"
                      >
                        Baca Selengkapnya
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="border-red-200 text-red-800 hover:bg-red-50">
                Muat Lebih Banyak Artikel
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Berlangganan Newsletter
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Dapatkan artikel terbaru dan update kegiatan langsung di email Anda
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent"
              />
              <Button className="bg-red-800 hover:bg-red-900 px-8">
                Berlangganan
              </Button>
            </div>
            
            <p className="text-sm text-gray-500 mt-4">
              Kami menghargai privasi Anda. Email tidak akan dibagikan ke pihak ketiga.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
