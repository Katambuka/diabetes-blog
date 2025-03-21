/*import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useState, useEffect } from "react";
import Link from "next/link";

// Sample articles with slugs
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

export default function Blog() {
  // State for comments
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState("");

  // Load comments from Local Storage on component mount
  useEffect(() => {
    const savedComments = localStorage.getItem("blogComments");
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);

  // Save comments to Local Storage whenever they change
  useEffect(() => {
    localStorage.setItem("blogComments", JSON.stringify(comments));
  }, [comments]);

  // Function to handle comment submission
  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-4">
          {/* Blog Title /}
          <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">
            Blog
          </h1>

          {/* Blog Posts/ }
          <div className="space-y-8">
            {articles.map((article) => (
              <div
                key={article.slug}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {article.title}
                </h2>
                <p className="text-gray-600 mb-6">{article.content}</p>
                {/* Link to the individual article page /}
                <Link
                  href={`/articles/${article.slug}`}
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
                >
                  Read More
                </Link>
              </div>
            ))}
          </div>

          {/* Comment Section /}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Comments</h2>

            {/* Comment Form /}
            <form onSubmit={handleCommentSubmit} className="mb-8">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Write your comment..."
                className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                rows={4}
                required
              />
              <button
                type="submit"
                className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
              >
                Post Comment
              </button>
            </form>

            {/* Display Comments /}
            <div className="space-y-4">
              {comments.map((comment, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
                >
                  <p className="text-gray-700">{comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}*/

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useState, useEffect } from "react";
import Link from "next/link";

// Sample articles with slugs
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

export default function Blog() {
  // State for comments
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState("");

  // Load comments from Local Storage on component mount
  useEffect(() => {
    const savedComments = localStorage.getItem("blogComments");
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);

  // Save comments to Local Storage whenever they change
  useEffect(() => {
    localStorage.setItem("blogComments", JSON.stringify(comments));
  }, [comments]);

  // Function to handle comment submission
  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-4">
          {/* Blog Title */}
          <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">
            Blog
          </h1>

          {/* Blog Posts */}
          <div className="space-y-8">
            {articles.map((article) => (
              <div
                key={article.slug}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {article.title}
                </h2>
                <p className="text-gray-600 mb-6">{article.content}</p>
                {/* Link to the individual article page */}
                <Link
                  href={`/Article/${article.slug}`}
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
                >
                  Read More
                </Link>
              </div>
            ))}
          </div>

          {/* Comment Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Comments</h2>

            {/* Comment Form */}
            <form onSubmit={handleCommentSubmit} className="mb-8">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Write your comment..."
                className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                rows={4}
                required
              />
              <button
                type="submit"
                className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
              >
                Post Comment
              </button>
            </form>

            {/* Display Comments */}
            <div className="space-y-4">
              {comments.map((comment, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
                >
                  <p className="text-gray-700">{comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}