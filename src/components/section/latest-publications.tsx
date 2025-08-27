import Link from "next/link";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SAMPLE_ARTICLES } from "@/lib/data/constants";

export default function LatestPublications() {
  const latestArticles = SAMPLE_ARTICLES.slice(0, 3);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 bg-red-50 border border-red-200 rounded-full px-4 py-2 mb-4">
            <Tag className="w-4 h-4 text-red-600" />
            <span className="text-red-800 text-sm font-medium">Publikasi Terbaru</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Artikel & Kajian Hukum
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Baca artikel dan kajian hukum terbaru dari para anggota UKM Advokasi
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 sm:mb-12">
          {latestArticles.map((article, index) => (
            <article
              key={article.id}
              className={`bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group ${
                index === 0 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Article Image */}
              <div className="aspect-[16/10] bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-red-800 text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg">
                    {article.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-bold text-lg sm:text-xl text-white mb-2 line-clamp-2 group-hover:text-red-200 transition-colors">
                    {article.title}
                  </h3>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-4 sm:p-6">
                <div className="flex items-center text-xs sm:text-sm text-gray-500 mb-3 space-x-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1 flex-shrink-0" />
                    <span className="truncate">{article.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1 flex-shrink-0" />
                    <span>
                      {new Date(article.publishDate).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-3 text-sm sm:text-base leading-relaxed">
                  {article.excerpt}
                </p>

                <Link
                  href={`/publikasi/${article.id}`}
                  className="inline-flex items-center text-red-800 hover:text-red-900 font-medium transition-colors text-sm group-hover:gap-2 group"
                >
                  Baca Selengkapnya
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            asChild 
            variant="outline" 
            size="lg" 
            className="border-red-200 text-red-800 hover:bg-red-50 hover:border-red-300 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <Link href="/publikasi">
              Lihat Semua Publikasi
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
