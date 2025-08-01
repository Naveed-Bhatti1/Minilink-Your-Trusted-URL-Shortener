import { FaRocket, FaLink, FaUser } from "react-icons/fa";

export default function AboutPage() {
  return (
    <main className="min-h-[calc(100vh-6rem)] px-6 flex flex-col items-center justify-start">
      <section className="max-w-3xl w-full text-center mt-10">
        <h1 className="text-4xl font-bold mb-4 text-white drop-shadow">
          🚀 About MiniLink
        </h1>
        <p className="text-lg text-gray-200 mb-10 leading-relaxed">
          MiniLink is a sleek, lightning-fast URL shortener built to simplify your digital sharing experience.
          Whether you&apos;re a creator, student, or entrepreneur, MiniLink helps you share smarter.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="p-5 rounded-xl bg-white/10 backdrop-blur-sm shadow hover:shadow-xl transition-all duration-300">
            <FaRocket className="text-blue-400 text-3xl mb-3" />
            <h3 className="font-semibold text-xl mb-2 text-white">Fast & Reliable</h3>
            <p className="text-gray-200 text-sm">
              Get instant redirection with optimized performance across all devices.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white/10 backdrop-blur-sm shadow hover:shadow-xl transition-all duration-300">
            <FaLink className="text-green-400 text-3xl mb-3" />
            <h3 className="font-semibold text-xl mb-2 text-white">Clean Short Links</h3>
            <p className="text-gray-200 text-sm">
              Create easy-to-read, professional links perfect for social media or business.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white/10 backdrop-blur-sm shadow hover:shadow-xl transition-all duration-300">
            <FaUser className="text-purple-400 text-3xl mb-3" />
            <h3 className="font-semibold text-xl mb-2 text-white">Made by Naveed</h3>
            <p className="text-gray-200 text-sm">
              Built with passion by a self-taught developer dedicated to clean and useful web apps.
            </p>
          </div>
        </div>

        <div className="mt-12 text-sm text-gray-300">
          &copy; {new Date().getFullYear()} MiniLink. Built with 💻 by Naveed.
        </div>
      </section>
    </main>
  );
}
