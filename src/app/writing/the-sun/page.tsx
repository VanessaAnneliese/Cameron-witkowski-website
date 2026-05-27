import Link from "next/link";

const stanzas = [
  ["It's what makes the rooster crow,", "And what causes wind to blow."],
  ["It's what makes the rower row,", "With each fiber head to toe."],
  ["It's what lets the daylight show,", "Who's in fact a friend or foe."],
  ["It's what makes the current flow,", "And gives beauty vibrant glow."],
  ["It's what lets you truly know,", "Thus determines yes and no."],
  ["It's the source that makes things go,", "And lets power never slow."],
  ["It's what causes life to grow,", "And you to reap what you sow."],
  ["Glance at sunset even though,", "It deserves a breathless \"oh.\""],
];

export default function TheSunPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <p className="text-[#1abc9c] font-semibold uppercase tracking-wide text-sm mb-2">Poetry</p>
      <h1 className="text-4xl font-bold text-[#2c3e50] mb-3">The Sun</h1>
      <p className="text-gray-500 italic mb-12">A short poem about the sun.</p>

      <div className="space-y-6">
        {stanzas.map(([a, b], i) => (
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
