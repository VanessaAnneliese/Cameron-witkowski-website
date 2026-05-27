import Link from "next/link";

export default function SomeIdeasPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <p className="text-[#1abc9c] font-semibold uppercase tracking-wide text-sm mb-2">Essay</p>
      <h1 className="text-4xl font-bold text-[#2c3e50] mb-3">Some Ideas About Things</h1>
      <p className="text-gray-500 italic mb-12">Summarizations of some interesting discussions about existence.</p>

      <div className="prose prose-lg max-w-none text-gray-700">
        <p className="leading-relaxed mb-6">
          A collection of condensed reflections on philosophical conversations regarding being and
          reality — summarizing some of the most interesting and provocative discussions about
          the nature of existence.
        </p>
        <p className="text-gray-500 text-sm mt-8">
          The full essay is available on{" "}
          <a
            href="https://cameronwitkowski.com"
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
