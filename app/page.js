import Image from "next/image";

export default function Home() {
  return (
    <div className="pt-20 h-[50vh] grid grid-cols-2 gap-2">
      <div className="txt">
        <p>Hello</p>
      </div>
      <div className="img relative">
        <Image
          src={"/vector.jpg"}
          alt="Hero Image"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="mix-blend-darken"
        />
      </div>
    </div>
  );
}
