import Image from "next/image";
import Link from "next/link";

const images = [
  { src: "/images/front_scope.png", alt: "Front view of the telescope" },
  { src: "/images/assembeled_body.png", alt: "Assembled telescope body" },
  { src: "/images/IMG_2563-scaled.jpg", alt: "Telescope construction" },
  { src: "/images/jupiter_rings.png", alt: "Jupiter — you can make out its bands!" },
  { src: "/images/jupiters_moons.png", alt: "Jupiter and its moons" },
  { src: "/images/moon_full.png", alt: "Full moon observation" },
];

export default function TelescopePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <p className="text-[#1abc9c] font-semibold uppercase tracking-wide text-sm mb-2">Grade 10 Science Project</p>
      <h1 className="text-4xl font-bold text-[#2c3e50] mb-6">Newtonian Reflector Telescope</h1>

      <div className="text-gray-700">
        <p className="text-xl text-gray-600 mb-8">
          For a science project in Grade 10 I designed and built a fully functioning Newtonian
          reflector telescope.
        </p>

        <h2 className="text-2xl font-bold text-[#2c3e50] mt-2 mb-4">The Build</h2>
        <p className="mb-4">
          A Newtonian reflector uses a primary concave mirror to collect and focus light, with a
          secondary flat mirror to redirect the image to a side-mounted eyepiece. Building one from
          scratch requires precision in mirror alignment, tube construction, and mount design.
        </p>

        <h2 className="text-2xl font-bold text-[#2c3e50] mt-10 mb-6">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {images.map((img) => (
            <div key={img.src} className="rounded-lg overflow-hidden aspect-square flex items-center justify-center">
              <Image
                src={img.src}
                alt={img.alt}
                width={300}
                height={300}
                className="object-contain w-full h-full p-2"
              />
            </div>
          ))}
        </div>

        <div className="bg-[#f8f9fa] border-l-4 border-[#1abc9c] px-5 py-4 rounded-r mb-6">
          <p className="text-gray-700 italic">
            &ldquo;Pictured above is the planet Jupiter — you can actually make out its bands!&rdquo;
          </p>
        </div>
        <div className="bg-[#f8f9fa] border-l-4 border-[#1abc9c] px-5 py-4 rounded-r">
          <p className="text-gray-700 italic">
            &ldquo;Pictured above is Jupiter and its moons.&rdquo;
          </p>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <Link href="/projects" className="text-[#1abc9c] hover:text-[#16a085] font-semibold transition-colors">
          ← Back to Projects
        </Link>
      </div>
    </div>
  );
}
