import Link from "next/link";

export default function UndergradThesisPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <p className="text-[#1abc9c] font-semibold uppercase tracking-wide text-sm mb-2">Undergraduate Thesis</p>
      <h1 className="text-4xl font-bold text-[#2c3e50] mb-6">
        A Novel Approach to Model Transcription in Humans
      </h1>

      <div className="text-gray-700 space-y-6 leading-relaxed text-lg">
        <p>
          I began this project in September, 2022 and finished it in April 2023.{" "}
          <a
            href="http://cameronwitkowski.com/wp-content/uploads/2023/05/Thesis_Final_Report_1.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1abc9c] hover:underline"
          >
            Read my complete work in my final report.
          </a>{" "}
          The code for this project can also be found on{" "}
          <a
            href="https://colab.research.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1abc9c] hover:underline"
          >
            Colab
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/Cameron7195/IBBME_TR300M_Project"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1abc9c] hover:underline"
          >
            Github
          </a>
          . Below, I have written a brief introduction to some of the core ideas underpinning my work.
        </p>

        <h2 className="text-2xl font-bold text-[#2c3e50] mt-10 mb-4">An Analogy for Transcription</h2>
        <p>
          Imagine that you are RNA Polymerase II and you are out, looking for a place to eat. The restaurant
          in this analogy represents a special region of DNA that you recognize as viable to bind to and
          initiate transcription. Biologists call this DNA region the transcriptional start site (TSS). Then
          the goal of my work is essentially to predict the likelihood of you going to any particular
          restaurant. Now when you&apos;re out and about, you can&apos;t just go anywhere. Instead, you look
          for certain attributes, perhaps a high ratings, a level of popularity, or certain cuisine.
          Similarly, there are a small set of patterns (AKA motifs) in the DNA sequence, known as core
          promoter elements, which RNA Polymerase II must recognize to bind.
        </p>
        <p>
          Now let&apos;s say you didn&apos;t go out alone, but instead brought with you a group of friends.
          Let&apos;s also say that you are getting the bill and will make the final decision where to go.
          Your friends then represent proteins called transcription factors. Each of your friends has
          different tastes and perhaps a specific place they want to go. Similarly, each transcription factor
          has one relatively specific DNA pattern they seek to bind to. In the decision making process, the
          interaction of your friends with restaurants plays a significant role in decision making. For
          instance, if your friends have gone to a particular restaurant before, they can say whether it was
          good or bad. Now, Biologists identify the action of transcription factors as the primary mechanism
          determining gene expression, so the role that friends play in this analogy is critical.
        </p>
        <p>
          Imagine we are marketing managers and can run millions of experiments of this decision making
          process with 20,000 potential restaurants and 17,000 sets of friends, in each experiment measuring
          whether you all go there to eat. In theory, with this data, we should be able to get a very good
          idea of the equation governing transcription, and machine learning techniques offer the perfect
          tool to approximate this equation effectively.
        </p>

        <h2 className="text-2xl font-bold text-[#2c3e50] mt-10 mb-4">What is Transcription</h2>
        <p>
          Transcription is the first step that occurs in the production of proteins in the nucleus of every
          cell of your body. In this step, a large, complex molecule called RNA Polymerase II binds to your
          DNA sequence and, using it as a template, produces a string of mRNA. In the next step, called
          translation, this mRNA sequence is translated by ribosomes into a chain of amino acids, according
          to the genetic code.
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
