import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, User, ArrowLeft, Share2, BookOpen, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SAMPLE_ARTICLES } from "@/lib/data/constants";

interface ArticlePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { id } = await params;
  const article = SAMPLE_ARTICLES.find(a => a.id === id);

  if (!article) {
    notFound();
  }

  const relatedArticles = SAMPLE_ARTICLES.filter(a => a.id !== id).slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <Button asChild variant="ghost" size="sm">
            <Link href="/publikasi">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali ke Publikasi
            </Link>
          </Button>
        </div>
      </div>

      {/* Article Header */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Category Badge */}
            <div className="mb-6">
              <span className="bg-red-800 text-white text-sm px-4 py-2 rounded-full font-medium">
                {article.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {article.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>
                  {new Date(article.publishDate).toLocaleDateString("id-ID", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5" />
                <span>5 menit baca</span>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center space-x-4 mb-8">
              <span className="text-gray-600 text-sm">Bagikan:</span>
              <Button size="sm" variant="outline" className="border-gray-300">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {article.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Article Image */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="h-64 lg:h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <BookOpen className="w-16 h-16 mx-auto mb-4" />
                  <p>Gambar artikel akan ditampilkan di sini</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 lg:p-12">
              {/* Excerpt */}
              <div className="bg-gray-50 border-l-4 border-red-800 p-6 rounded-r-lg mb-8">
                <p className="text-lg text-gray-700 italic leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              {/* Article Body */}
              <div className="prose prose-lg max-w-none">
                <h2>Pendahuluan</h2>
                <p>
                  Konstitusi merupakan hukum dasar tertinggi dalam sistem hukum suatu negara. 
                  Di Indonesia, konstitusi yang berlaku adalah Undang-Undang Dasar Negara 
                  Republik Indonesia Tahun 1945 (UUD 1945). Memahami dasar-dasar hukum 
                  konstitusi sangatlah penting bagi setiap warga negara, khususnya bagi 
                  mahasiswa yang berkecimpung dalam dunia hukum.
                </p>

                <h2>Sejarah Konstitusi Indonesia</h2>
                <p>
                  UUD 1945 pertama kali disahkan pada tanggal 18 Agustus 1945 oleh Panitia 
                  Persiapan Kemerdekaan Indonesia (PPKI). Sejak saat itu, konstitusi Indonesia 
                  telah mengalami beberapa kali perubahan dan amendemen untuk menyesuaikan 
                  dengan perkembangan zaman dan kebutuhan bangsa.
                </p>

                <h2>Prinsip-Prinsip Dasar</h2>
                <p>
                  Konstitusi Indonesia dibangun atas beberapa prinsip dasar yang fundamental:
                </p>
                <ul>
                  <li>Kedaulatan rakyat</li>
                  <li>Negara hukum</li>
                  <li>Pembagian kekuasaan</li>
                  <li>Perlindungan hak asasi manusia</li>
                  <li>Supremasi konstitusi</li>
                </ul>

                <h2>Implementasi dalam Kehidupan Berbangsa</h2>
                <p>
                  Pemahaman terhadap konstitusi tidak hanya sebatas teori, tetapi harus 
                  diimplementasikan dalam kehidupan sehari-hari. Setiap warga negara, 
                  termasuk mahasiswa, memiliki peran penting dalam menjaga dan 
                  mengamalkan nilai-nilai konstitusi.
                </p>

                <h2>Kesimpulan</h2>
                <p>
                  Memahami dasar-dasar hukum konstitusi Indonesia merupakan langkah awal 
                  yang penting dalam membangun kesadaran hukum yang baik. Dengan pemahaman 
                  yang mendalam tentang konstitusi, diharapkan setiap individu dapat 
                  berpartisipasi aktif dalam pembangunan bangsa yang berdasarkan hukum.
                </p>
              </div>

              {/* Author Bio */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-8 h-8 text-red-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">
                      {article.author}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Tim Redaksi UKM Advokasi terdiri dari anggota-anggota yang memiliki 
                      passion dalam bidang hukum dan penulisan. Kami berkomitmen untuk 
                      menyajikan artikel-artikel berkualitas yang dapat memberikan manfaat 
                      bagi pembaca.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Artikel Terkait
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {relatedArticles.map((relatedArticle) => (
                  <article
                    key={relatedArticle.id}
                    className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 relative">
                      <div className="absolute top-4 left-4">
                        <span className="bg-red-800 text-white text-xs px-3 py-1 rounded-full font-medium">
                          {relatedArticle.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>
                          {new Date(relatedArticle.publishDate).toLocaleDateString("id-ID", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </span>
                      </div>

                      <h3 className="font-semibold text-lg text-gray-900 mb-3 line-clamp-2">
                        {relatedArticle.title}
                      </h3>

                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {relatedArticle.excerpt}
                      </p>

                      <Link
                        href={`/publikasi/${relatedArticle.id}`}
                        className="inline-flex items-center text-red-800 hover:text-red-900 font-medium transition-colors"
                      >
                        Baca Selengkapnya
                        <ArrowLeft className="ml-1 w-4 h-4 rotate-180" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
