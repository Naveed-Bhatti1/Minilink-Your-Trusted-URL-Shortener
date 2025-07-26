import Image from "next/image";
import localFont from "next/font/local";

const poppins = localFont({
  src: "../app/fonts/Poppins/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "800",
})

export default function Home() {
  return (
    <>
      <div className="pt-20 h-[60vh] p-3 grid grid-cols-2 gap-2">
        <div className="txt flex flex-col justify-center items-center px-6 md:px-20 lg:px-40">
          <p className={`text-2xl font-bold ${poppins.className}`}>
            The Best URL Shortener for Your Needs
          </p>
          <p className="text-blue-200 text-center mt-4">
            We are the straightforward solution for shortening URLs, making them
            easy to share and manage.
          </p>
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
