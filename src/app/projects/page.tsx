import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    slug: "masters-thesis",
    label: "Masters Thesis",
    title: "A Mathematical Model of Morphogenesis",
    description:
      "Integrating a biological understanding of transcription with an engineering & AI background, I present a novel approach to comprehensively model gene expression using cutting-edge machine learning techniques.",
    image: "/images/data-science-icon-teal-2.png",
  },
  {
    slug: "undergrad-thesis",
    label: "Undergrad Thesis",
    title: "Gene Regulation Modeling",
    description:
      "Integrating a biological understanding of transcription with an engineering & AI background, I present a novel approach to comprehensively model gene expression using cutting-edge machine learning techniques.",
    image: "/images/data-science-icon-teal-2.png",
  },
  {
    slug: "drone-reactor-inspection",
    label: "Capstone Project",
    title: "Drone Reactor Inspection",
    description:
      "For my 4th year Capstone design project teamed with Ben Agro, Jerry Chen, and Connor Lee, we are designing drones for Nuclear Power Plant safety.",
    image: "/images/drone.png",
  },
  {
    slug: "sexually-selected-computer-code",
    label: "Research",
    title: "Sexually Selected Computer Code",
    description:
      "A pioneering attempt to blur the line between the digital and biological realms using evolutionary algorithms inspired by DNA recombination through sexual selection.",
    image: "/images/data-science-icon-teal-3.png",
  },
  {
    slug: "dynamics-of-probabilistic-neurons",
    label: "Simulation",
    title: "Emergent Dynamics of Probabilistic Neurons",
    description:
      "In this project, I created an array of 8,000 neurons, each connected to their nearest neighbours, and ran a simulation to see what emergent structures form.",
    image: "/images/data-science-icon-teal-6.png",
  },
  {
    slug: "minimax-chess-engine",
    label: "Software",
    title: "Minimax Chess Engine",
    description:
      "A daunting exercise in pointers and memory management. The final engine can resolve a minimax search 5 moves deep in under 1 second.",
    image: "/images/data-science-icon-teal-2.png",
  },
  {
    slug: "telescope",
    label: "Grade 10 Project",
    title: "Newtonian Reflector Telescope",
    description:
      "For a science project in Grade 10 I designed and built a fully functioning Newtonian reflector telescope capable of observing Jupiter and its moons.",
    image: "/images/front_scope.png",
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-[#2c3e50] mb-3">Projects</h1>
      <p className="text-gray-500 mb-12 text-lg">A collection of engineering, AI, and science projects.</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="group bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="p-6 flex items-center justify-center h-40">
              <Image
                src={p.image}
                alt={p.title}
                width={120}
                height={120}
                className="object-contain group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-5">
              <p className="text-[#1abc9c] text-xs font-semibold uppercase tracking-wide mb-1">{p.label}</p>
              <h2 className="font-bold text-[#2c3e50] text-lg mb-2 group-hover:text-[#1abc9c] transition-colors">
                {p.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">{p.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
