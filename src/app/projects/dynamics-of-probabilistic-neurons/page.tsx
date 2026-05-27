import Link from "next/link";

export default function ProbabilisticNeuronsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <p className="text-[#1abc9c] font-semibold uppercase tracking-wide text-sm mb-2">Simulation</p>
      <h1 className="text-4xl font-bold text-[#2c3e50] mb-6">
        Emergent Dynamics of Probabilistic Neurons
      </h1>

      <div className="text-gray-700">
        <p className="text-xl text-gray-600 mb-8">
          In this project, I created an array of 8,000 neurons, each connected to their nearest
          neighbours, and ran a simulation to see what emergent structures form.
        </p>

        <h2 className="text-2xl font-bold text-[#2c3e50] mt-2 mb-4">Overview</h2>
        <p className="mb-4">
          What happens when you give 8,000 neurons simple, probabilistic firing rules and let them
          interact? This project explores the emergence of complex structures from minimal ingredients.
          Each neuron is connected only to its nearest neighbours, yet the collective dynamics produce
          rich, unexpected patterns.
        </p>

        <h2 className="text-2xl font-bold text-[#2c3e50] mt-10 mb-4">Setup</h2>
        <div className="bg-[#f8f9fa] rounded-lg p-6 mb-8">
          <ul className="space-y-3">
            {[
              "8,000 neurons arranged in a 2D grid",
              "Each neuron connected to its nearest neighbours",
              "Probabilistic firing rules govern activation",
              "Simulation run over thousands of time steps",
              "Emergent structures observed and analyzed",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-[#1abc9c] mt-0.5 shrink-0">▸</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-[#2c3e50] mt-10 mb-4">Findings</h2>
        <p className="mb-4">
          The simulation reveals that even with simple local rules and stochastic dynamics, the network
          self-organizes into coherent structures — oscillating clusters, propagating waves, and stable
          attractor states — demonstrating the power of emergence in neural-like systems.
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
