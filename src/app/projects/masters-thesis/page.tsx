import Link from "next/link";

export default function MastersThesisPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <p className="text-[#1abc9c] font-semibold uppercase tracking-wide text-sm mb-2">Masters Thesis</p>
      <h1 className="text-4xl font-bold text-[#2c3e50] mb-6">A Mathematical Model of Morphogenesis</h1>

      <div className="prose prose-lg max-w-none text-gray-700">
        <p className="lead text-xl text-gray-600 mb-8">
          How do cells know when to stop dividing? How does differentiation govern structure?
          How does symmetry breaking occur? These are the questions at the heart of my MASc thesis.
        </p>

        <h2 className="text-2xl font-bold text-[#2c3e50] mt-10 mb-4">Overview</h2>
        <p className="mb-4">
          My thesis explores the fundamental questions of biological development through the lens of
          mathematics and machine learning. I am building a Python engine powered by an equivariant
          neural network to model morphogenesis — the biological process that causes an organism to
          develop its shape.
        </p>

        <h2 className="text-2xl font-bold text-[#2c3e50] mt-10 mb-4">Inspirations</h2>
        <ul className="space-y-3 mb-6">
          <li>
            <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" target="_blank" rel="noopener noreferrer" className="text-[#1abc9c] hover:text-[#16a085] font-medium">
              Conway&apos;s Game of Life
            </a>
            {" "}— emergent complexity from simple rules
          </li>
          <li>
            <a href="https://distill.pub/2020/growing-ca/" target="_blank" rel="noopener noreferrer" className="text-[#1abc9c] hover:text-[#16a085] font-medium">
              Neural Cellular Automata
            </a>
            {" "}— differentiable, learnable cellular automata
          </li>
          <li>
            <a href="https://nature.com/articles/s41586-021-03819-2" target="_blank" rel="noopener noreferrer" className="text-[#1abc9c] hover:text-[#16a085] font-medium">
              Alphafold
            </a>
            {" "}— deep learning applied to biological structure prediction
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-[#2c3e50] mt-10 mb-4">Key Questions</h2>
        <div className="space-y-4 mb-8">
          {[
            "How do cells know when to stop dividing?",
            "How does differentiation govern structure?",
            "How does symmetry breaking occur?",
          ].map((q) => (
            <div key={q} className="bg-[#f8f9fa] border-l-4 border-[#1abc9c] px-5 py-4 rounded-r">
              <p className="text-gray-700 italic font-medium">&ldquo;{q}&rdquo;</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-[#2c3e50] mt-10 mb-4">Approach</h2>
        <p className="mb-4">
          The engine uses an equivariant neural network architecture that respects the rotational and
          translational symmetries inherent in biological systems. Training data is derived from
          experimental observations of cellular development across multiple model organisms.
        </p>

        <h2 className="text-2xl font-bold text-[#2c3e50] mt-10 mb-4">Status</h2>
        <p className="mb-4">
          This project is currently on hold. Midway through my Master&apos;s degree, I made the
          decision to step away from academia and pursue the frontier of AI directly — co-founding a start-up called
          {" "}
          <a href="https://breadtechnologies.com" target="_blank" rel="noopener noreferrer" className="text-[#1abc9c] hover:underline">
            Bread Technologies
          </a>
          . A high-level overview and code for the project can be found on{" "}
          <a href="https://github.com/Cameron7195" target="_blank" rel="noopener noreferrer" className="text-[#1abc9c] hover:underline">
            Github
          </a>
          .
        </p>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <Link href="/projects" className="text-[#1abc9c] hover:text-[#16a085] font-semibold transition-colors">
          ← Back to Projects
        </Link>
      </div>
    </div>
  );
}
