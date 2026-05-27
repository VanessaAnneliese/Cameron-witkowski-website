import Link from "next/link";

const lines = [
  ["Make a point, to make a point.", "And extension, by extension."],
  ["Now we have a line of reason,", "You agree on this dimension?"],
  ["But complain that if I'm right,", "Surface findings are hot air."],
  ["That won't be cor-rect to write,", "When we frame discussion there."],
  ["Once we make a solid start,", "We add substance to my view."],
  ["I will sketch out every part,", "Just the building's left to do."],
  ["To construct an argument,", "Solid ground should be desired,"],
  ["Premises fill in cement.", "A foundation is required."],
  ["If it's based on something weak,", "If your statements aren't kept straight,"],
  ["Hollow words are all you speak,", "Which will simply bear no weight."],
  ["Gravity cannot be banned;", "Fortify to not be felled."],
  ["Any error will not stand,", "Only truth will be upheld."],
  ["Is this all coincidence?", "Two-fold meanings in each case?"],
  ["Have I mixed up every sense?", "Is one outside time and space?"],
];

export default function LogicAsSpacePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <p className="text-[#1abc9c] font-semibold uppercase tracking-wide text-sm mb-2">Poetry</p>
      <h1 className="text-4xl font-bold text-[#2c3e50] mb-3">Logic as Space</h1>
      <p className="text-gray-500 italic mb-12">A poem rethinking the realm of thought.</p>

      <div className="space-y-6">
        {lines.map(([a, b], i) => (
          <div key={i} className="leading-relaxed text-gray-700 text-lg font-serif">
            <p>{a}</p>
            <p>{b}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <Link href="/writing" className="text-[#1abc9c] hover:text-[#16a085] font-semibold transition-colors">
          ← Back to Writing
        </Link>
      </div>
    </div>
  );
}
