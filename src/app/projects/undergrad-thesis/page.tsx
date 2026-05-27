import Link from "next/link";

export default function UndergradThesisPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <p className="text-[#1abc9c] font-semibold uppercase tracking-wide text-sm mb-2">Undergraduate Thesis</p>
      <h1 className="text-4xl font-bold text-[#2c3e50] mb-6">
        A Novel Approach to Model Transcription in Humans
      </h1>

      <div className="text-gray-700">
        <p className="text-xl text-gray-600 mb-8">
          Integrating a biological understanding of transcription with an engineering &amp; AI background,
          I present a novel approach to comprehensively model gene expression using cutting-edge machine
          learning techniques.
        </p>

        <h2 className="text-2xl font-bold text-[#2c3e50] mt-10 mb-4">Overview</h2>
        <p className="mb-4">
          This thesis presents a comprehensive machine learning model for gene expression prediction,
          drawing on 330 million supervised examples sourced from GTEx cell-specific gene expression
          experiments. The work bridges biological intuition about transcription with modern deep learning
          architectures.
        </p>

        <h2 className="text-2xl font-bold text-[#2c3e50] mt-10 mb-4">Pipeline</h2>
        <div className="grid grid-cols-3 gap-4 mb-8">
          {["Experimental Data", "Model Design", "Training & Testing"].map((step, i) => (
            <div key={step} className="bg-[#f8f9fa] rounded-lg p-5 text-center border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-[#1abc9c] text-white flex items-center justify-center font-bold text-xl mx-auto mb-3">
                {i + 1}
              </div>
              <p className="font-semibold text-gray-700">{step}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-[#2c3e50] mt-10 mb-4">Dataset</h2>
        <p className="mb-4">
          330 million supervised examples were sourced from GTEx (Genotype-Tissue Expression) cell-specific
          gene expression experiments, providing a rich and diverse training set spanning multiple tissue
          types and conditions.
        </p>

        <div className="mt-8">
          <a
            href="http://cameronwitkowski.com/wp-content/uploads/2023/05/Thesis_Final_Report_1.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#1abc9c] text-white px-6 py-3 rounded font-semibold hover:bg-[#16a085] transition-colors"
          >
            Read the Thesis (PDF)
          </a>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <Link href="/projects" className="text-[#1abc9c] hover:text-[#16a085] font-semibold transition-colors">
          ← Back to Projects
        </Link>
      </div>
    </div>
  );
}
