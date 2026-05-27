import Link from "next/link";

export default function TheSunPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <p className="text-[#1abc9c] font-semibold uppercase tracking-wide text-sm mb-2">Poetry</p>
      <h1 className="text-4xl font-bold text-[#2c3e50] mb-3">The Sun</h1>
      <p className="text-gray-500 italic mb-12">A short poem about the sun.</p>

      <div className="prose prose-lg max-w-none text-gray-700">
        <p className="leading-relaxed mb-6">
          A poem about the sun and its relationship to the rhythms of life — roosters crowing,
          wind moving, rowing efforts, daylight, electrical currents, aesthetic beauty, growth,
          and the quiet invitation to appreciate sunsets.
        </p>
        <p className="leading-relaxed mb-6">
          The composition uses consistent rhyming couplets throughout, grounding the poem&apos;s
          lyric flow in the steady cadence of natural cycles.
        </p>
        <p className="text-gray-500 text-sm mt-8">
          The full poem is available on{" "}
          <a
            href="https://cameronwitkowski.com/the-sun/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1abc9c] hover:text-[#16a085]"
          >
            cameronwitkowski.com
          </a>
          .
        </p>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <Link href="/writing" className="text-[#1abc9c] hover:text-[#16a085] font-semibold transition-colors">
          ← Back to Writing
        </Link>
      </div>
    </div>
  );
}
