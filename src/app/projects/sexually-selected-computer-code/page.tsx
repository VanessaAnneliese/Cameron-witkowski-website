import Image from "next/image";
import Link from "next/link";

export default function SexuallySelectedCodePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <p className="text-[#1abc9c] font-semibold uppercase tracking-wide text-sm mb-2">Research</p>
      <h1 className="text-4xl font-bold text-[#2c3e50] mb-6">Sexually Selected Computer Code</h1>

      <div className="mb-10 flex justify-center">
        <Image
          src="/images/Screenshot-2023-03-04-at-12.23.02-AM.png"
          alt="Sexually Selected Computer Code"
          width={600}
          height={400}
          className="object-contain rounded"
        />
      </div>

      <div className="bg-[#f8f9fa] border-l-4 border-[#1abc9c] px-6 py-5 rounded-r mb-10">
        <p className="text-xl text-gray-700 italic">
          &ldquo;Is DNA to life what code is to computers?&rdquo;
        </p>
      </div>

      <div className="text-gray-700">
        <h2 className="text-2xl font-bold text-[#2c3e50] mt-2 mb-4">Overview</h2>
        <p className="mb-4">
          This project is a pioneering attempt to blur the line between the digital and biological realms.
          I present an approach to optimizing computer programs using evolutionary algorithms by
          recombining their instructions in the same way that DNA is recombined through sexual selection.
        </p>

        <h2 className="text-2xl font-bold text-[#2c3e50] mt-10 mb-4">The Idea</h2>
        <p className="mb-4">
          In biological evolution, sexual reproduction allows successful genetic sequences to be mixed and
          recombined, producing offspring that may outperform either parent. This project asks: can the
          same principle be applied to computer programs?
        </p>
        <p className="mb-4">
          By treating program instructions as genetic material and applying crossover and mutation
          operators analogous to those in biological sexual reproduction, the algorithm evolves programs
          toward optimal solutions — without requiring explicit knowledge of the optimal program structure.
        </p>

        <h2 className="text-2xl font-bold text-[#2c3e50] mt-10 mb-4">Key Concepts</h2>
        <ul className="space-y-3 mb-8">
          {[
            "Evolutionary algorithms inspired by natural selection",
            "Genetic crossover applied to program instruction sets",
            "Fitness functions to evaluate program quality",
            "Emergent optimization without gradient information",
          ].map((concept) => (
            <li key={concept} className="flex items-start gap-3">
              <span className="text-[#1abc9c] mt-0.5 shrink-0">▸</span>
              <span>{concept}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <Link href="/projects" className="text-[#1abc9c] hover:text-[#16a085] font-semibold transition-colors">
          ← Back to Projects
        </Link>
      </div>
    </div>
  );
}
