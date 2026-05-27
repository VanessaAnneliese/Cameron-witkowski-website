import Link from "next/link";

const pieces = [
  {
    slug: "logic-as-space",
    title: "Logic as Space",
    description: "A poem rethinking the realm of thought.",
    type: "Poetry",
  },
  {
    slug: "some-ideas-about-things",
    title: "Some Ideas About Things",
    description: "Summarizations of some interesting discussions about existence.",
    type: "Essay",
  },
  {
    slug: "the-sun",
    title: "The Sun",
    description: "A short poem about the sun.",
    type: "Poetry",
  },
];

export default function WritingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-[#2c3e50] mb-3">Writing</h1>
      <p className="text-gray-500 mb-12 text-lg">Creative writing, poetry, and philosophical essays.</p>

      <div className="space-y-4">
        {pieces.map((piece) => (
          <Link
            key={piece.slug}
            href={`/writing/${piece.slug}`}
            className="group block bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md hover:border-[#1abc9c] transition-all"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-[#1abc9c] text-xs font-semibold uppercase tracking-wide">{piece.type}</span>
                <h2 className="text-xl font-bold text-[#2c3e50] mt-1 group-hover:text-[#1abc9c] transition-colors">
                  {piece.title}
                </h2>
                <p className="text-gray-600 mt-2">{piece.description}</p>
              </div>
              <span className="text-[#1abc9c] text-2xl shrink-0 mt-1">→</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
