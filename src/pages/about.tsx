import {Header} from '../components/Header';
import {Footer} from '../components/Footer';
import "../styles/globals.css";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 py-12 flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-12">
            About Us
          </h1>
          <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg p-6 border border-gray-700">
            <p className="text-gray-300 leading-relaxed mb-4">
              Welcome to the Diabetes Blog! We are dedicated to providing valuable
              information and resources to help individuals manage diabetes
              effectively. Our platform allows users to share ideas and interact with
              each other in a supportive community.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Our team consists of healthcare professionals, nutritionists, and
              individuals who have personal experience with diabetes. We strive to
              offer the latest research, tips, and personal stories to inspire and
              educate our readers.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Join us on this journey to better health and well-being. Together, we
              can make a difference in the lives of those affected by diabetes.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}