import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function Home() {
  return (
    <>
      <div className="pt-24 h-[60vh] p-3 grid grid-cols-2 gap-2">
        <div className="txt flex rounded-lg flex-col justify-center items-center px-6 md:px-20 lg:px-44">
          <p className={`text-3xl font-extrabold ${poppins.variable}`}>
            The Best URL Shortener for Your Needs
          </p>
          <p className="text-blue-200 text-center mt-4">
            We are the straightforward solution for shortening URLs, making them
            easy to share and manage.
          </p>
          <div>
            <Link href={"/github"}>
            <button
              type="button"
              className="text-white mt-6 cursor-pointer bg-gradient-to-r from-blue-400  to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              GitHub
            </button>
          </Link>
          <Link href={"/shorten"}>
            <button
              type="button"
              className="text-white mt-6 cursor-pointer bg-gradient-to-r from-blue-400 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Try Now
            </button>
          </Link>
          </div>
        </div>
        <div className="img relative w-full h-full">
          <Image
            fill
            src="/vector.jpg"
            alt="A vector image"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover rounded-lg"
          />
        </div>
      </div>
      <div className="breaker shadow-lg shadow-white/50  h-[2px] mt-4 w-2/3 mx-auto bg-gradient-to-r from-transparent from-0% via-blue-300 via-50% to-transparent to-100%" />
    </>
  );
}
