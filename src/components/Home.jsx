import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-lightbg min-h-screen">
    <div className="flex flex-wrap-reverse items-center p-4">
      <div className="flex flex-col justify-center items-center text-center w-10/12 lg:w-1/2 m-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-buda">Ignite Your Journey, Elevate Your Experience</h1>
        <p className="text-2xl mt-4">LAUNCHING 2024</p>
        <p className="text-xl mt-4 mx-5 lg:mx-24">Follow us on <a href="https://www.instagram.com/getblazed.ca/" className="hover:text-blazedgreen">Instagram</a> to keep up with updates and be the first to know when we go live!</p>
      </div>
      <div className="flex justify-center items-center m-auto w-full lg:w-1/2 max-h-screen">
        <Image
        src="/images/david-gabric-KdC5agsz6ik-unsplash.jpg"
        alt="Silhouette of a person holding up a cannabis leaf in front of the sun low in the sky. Photo by David Gabric on Unsplash."
        width={380}
        height={400}
        className="rounded-tl-full rounded-tr-full mb-5 h-96 w-80 lg:w-3/5 lg:h-1/2 object-cover"
        />
      </div>
    </div>
    </div>

  );
}
