import Link from "next/link";

export default function ChessEnginePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <p className="text-[#1abc9c] font-semibold uppercase tracking-wide text-sm mb-2">Software</p>
      <h1 className="text-4xl font-bold text-[#2c3e50] mb-6">Minimax Chess Engine</h1>

      <div className="text-gray-700">
        <p className="text-xl text-gray-600 mb-8">
          A daunting exercise in pointers and memory management. The final engine can resolve a minimax
          search 5 moves deep in under 1 second.
        </p>

        <h2 className="text-2xl font-bold text-[#2c3e50] mt-2 mb-4">Overview</h2>
        <p className="mb-4">
          Building a chess engine from scratch requires mastering both the domain knowledge of chess
          and the low-level systems programming necessary for performance. This project is a deep dive
          into algorithms, data structures, and memory management.
        </p>

        <h2 className="text-2xl font-bold text-[#2c3e50] mt-10 mb-4">Technical Details</h2>
        <div className="bg-[#f8f9fa] rounded-lg p-6 mb-8">
          <ul className="space-y-3">
            {[
              "Minimax search algorithm with alpha-beta pruning",
              "5-ply (move) search depth in under 1 second",
              "Hand-crafted board evaluation heuristics",
              "Efficient move generation using bitboards",
              "Implemented in C for maximum performance",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-[#1abc9c] mt-0.5 shrink-0">▸</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-[#2c3e50] mt-10 mb-4">The Challenge</h2>
        <p className="mb-4">
          Chess engines require careful management of game state across thousands of recursive calls.
          This project was as much an exercise in low-level C programming — pointers, memory allocation,
          bitwise operations — as it was in game tree search.
        </p>
        <p className="mb-4">
          The key insight that enabled 5-ply search within the time budget was alpha-beta pruning,
          which eliminates branches of the search tree that cannot affect the final decision, dramatically
          reducing the effective branching factor.
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
