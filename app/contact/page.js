import Link from "next/link";
import { FaEnvelope, FaTwitter, FaGithub } from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="min-h-[calc(100vh-6rem)] px-6 flex flex-col items-center justify-start">
      <section className="max-w-2xl w-full mt-10 text-center">
        <h1 className="text-4xl font-bold mb-4 text-white drop-shadow">
          📬 Contact Us
        </h1>
        <p className="text-lg text-gray-200 mb-10">
          Got feedback, ideas, or just want to say hello? Reach out to the
          MiniLink team!
        </p>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-12 shadow">
          <div className="flex flex-col items-start gap-4 text-left text-gray-200 text-sm">
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-blue-300" />
              <Link href="mailto:codeholder1@gmail.com" className="hover:underline">
                codeholder1@gmail.com
              </Link>
            </div>
        
            <div className="flex items-center gap-2">
              <FaGithub className="text-gray-400" />
              <Link
                href="https://github.com/Naveed-Bhatti1"
                target="_blank"
                className="hover:underline"
              >
                github.com/Naveed-Bhatti1
              </Link>
            </div>
          </div>
        </div>


        

        <p className="mt-6 text-sm text-gray-400">
          Built with ❤️ by Naveed — powered by Next.js 15 & Tailwind CSS.
        </p>
      </section>
    </main>
  );
}
