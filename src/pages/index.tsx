
import { Footer } from "@/components/Footer";
import ArticleCard from "../components/ArticleCard";
import { Header } from "@/components/Header";
import "../styles/globals.css";

// Sample data for articles
const articles = [
  {
    id: 1,
    title: "Understanding Diabetes",
    excerpt: "Learn about the basics of diabetes and how to manage it.",
    slug: "understanding-diabetes",
  },
  {
    id: 2,
    title: "Healthy Eating for Diabetics",
    excerpt: "Discover the best foods to eat for managing blood sugar levels.",
    slug: "healthy-eating-for-diabetics",
  },
];

export default function Home() {
  return (
    <>
      {/* Header Component */}
      <Header />

      {/* Main Content */}
      <main className="min-h-screen bg-gray-100 py-8">
        <div className="max-w-4xl mx-auto px-4">
          {/* Welcome Message */}
          <h1 className="text-3xl font-bold mb-8">Welcome to Our Blog</h1>
          <p className="text-lg text-gray-700 mb-8">
            Explore our latest articles on diabetes care, healthy living, and more.
          </p>

          {/* Articles Section */}
          <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
          <div className="space-y-6">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </main>

      {/* Footer Component */}
      <Footer />
    </>
  );
}