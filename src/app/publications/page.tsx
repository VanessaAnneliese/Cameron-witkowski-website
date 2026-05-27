export default function PublicationsPage() {
  const publications = [
    {
      number: 1,
      title: "Prompt Baking",
      year: 2024,
      authors: "A. Bhargava, C. Witkowski, A. Detkov, M. Thomson",
      venue: "arXiv preprint arXiv:2409.13697",
      href: "https://arxiv.org/abs/2409.13697",
    },
    {
      number: 2,
      title: "A Turing Test for Self-Awareness",
      year: 2024,
      authors: "C. Witkowski",
      venue: "Preprint",
      href: "http://cameronwitkowski.com/wp-content/uploads/2024/05/Turing_Test_SA_preprint_final.pdf",
    },
    {
      number: 3,
      title: "On the Precise Link Between Energy and Information",
      year: 2024,
      authors: "C. Witkowski, S. Brown, K. Truong",
      venue: "Entropy, Volume 26, Article 203",
      href: "https://doi.org/10.3390/e26030203",
    },
    {
      number: 4,
      title: "What's the Magic Word? A Control Theory of LLM Prompting",
      year: 2023,
      authors: "A. Bhargava, C. Witkowski, M. Shah, M. Thomson",
      venue: "arXiv preprint arXiv:2310.04444",
      href: "https://arxiv.org/abs/2310.04444",
    },
    {
      number: 5,
      title: "A Novel Approach to Model Transcription in Humans",
      year: 2023,
      authors: "C. Witkowski",
      venue: "Preprint",
      href: "http://cameronwitkowski.com/wp-content/uploads/2023/05/Thesis_Final_Report_1.pdf",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-[#2c3e50] mb-3">Publications</h1>
      <p className="text-gray-500 mb-12 text-lg">Peer-reviewed articles, preprints, and theses.</p>

      <div className="space-y-6">
        {publications.map((pub) => (
          <div
            key={pub.number}
            className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-4">
              <span className="text-[#1abc9c] font-bold text-lg shrink-0">[{pub.number}]</span>
              <div>
                <a
                  href={pub.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#2c3e50] text-lg hover:text-[#1abc9c] transition-colors"
                >
                  {pub.title}
                </a>
                <p className="text-gray-600 mt-1">{pub.authors}</p>
                <p className="text-gray-500 text-sm mt-1">
                  <span className="italic">{pub.venue}</span>
                  <span className="mx-2">·</span>
                  <span>{pub.year}</span>
                </p>
                <a
                  href={pub.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-[#1abc9c] text-sm font-semibold hover:text-[#16a085] transition-colors"
                >
                  View Paper →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
