// pages/articles/[slug].tsx
/*import { useRouter } from "next/router";

// Sample articles (same as in the Blog component)
const articles = [
  {
    slug: "future-of-diabetes-care",
    title: "The Future of Diabetes Care",
    content:
      "Discover how technology is revolutionizing diabetes management and improving patient outcomes.",
  },
  {
    slug: "healthy-eating-tips-for-diabetics",
    title: "Healthy Eating Tips for Diabetics",
    content:
      "Learn about the best foods to eat and avoid for managing blood sugar levels effectively.",
  },
];

export default function Article() {
  const router = useRouter();
  const { slug } = router.query;

  // Find the article based on the slug
  const article = articles.find((article) => article.slug === slug);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-gray-900 mb-8">{article.title}</h1>
        <p className="text-gray-600">{article.content}</p>
      </div>
    </div>
  );*/
  import { useRouter } from "next/router";

  // Sample articles (same as in the Blog component)
  const articles = [
    {
      slug: "future-of-diabetes-care",
      title: "The Future of Diabetes Care",
      content:
        "Discover how technology is revolutionizing diabetes management and improving patient outcomes.",
    },
    {
      slug: "healthy-eating-tips-for-diabetics",
      title: "Healthy Eating Tips for Diabetics",
      content:
        "Learn about the best foods to eat and avoid for managing blood sugar levels effectively.",
    },
  ];
  
  export default function Article() {
    const router = useRouter();
    const { slug } = router.query;
  
    // Find the article based on the slug
    const article = articles.find((article) => article.slug === slug);
  
    if (!article) {
      return <div>Article not found</div>;
    }
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-900 mb-8">{article.title}</h1>
          <p className="text-gray-600">{article.content}</p>
        </div>
      </div>
    );
  }