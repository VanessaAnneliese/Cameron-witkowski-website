import Link from "next/link";

export default function LogicAsSpacePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <p className="text-[#1abc9c] font-semibold uppercase tracking-wide text-sm mb-2">Poetry</p>
      <h1 className="text-4xl font-bold text-[#2c3e50] mb-3">Logic as Space</h1>
      <p className="text-gray-500 italic mb-12">A poem rethinking the realm of thought.</p>

      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 leading-relaxed mb-6">
          The poem explores how the language of logic and the language of space are one and the same.
          To make a <em>point</em> requires extending ideas into <em>lines</em> of reasoning. Arguments need
          solid <em>ground</em> and proper <em>framing</em> to avoid being &ldquo;hollow.&rdquo;
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Only truth-based arguments can withstand scrutiny — weak <em>premises</em> collapse.
          The poem closes by questioning whether the recurring spatial language — <em>point</em>,
          <em> extension</em>, <em>line</em>, <em>dimension</em>, <em>right</em>, <em>surface</em>,
          <em> frame</em>, <em>solid</em>, <em>substance</em>, <em>construct</em>, <em>ground</em>,
          <em> foundation</em>, <em>weight</em>, <em>gravity</em>, <em>stand</em>, <em>space</em> —
          represents intentional layering of meaning.
        </p>
        <div className="bg-[#f8f9fa] border-l-4 border-[#1abc9c] px-6 py-5 rounded-r my-8">
          <p className="text-gray-700 italic font-medium">
            &ldquo;A <em>foundation</em> is required.&rdquo;
          </p>
        </div>
        <p className="text-gray-500 text-sm mt-8">
          The full poem is available on{" "}
          <a
            href="https://cameronwitkowski.com/logic-as-space/"
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
