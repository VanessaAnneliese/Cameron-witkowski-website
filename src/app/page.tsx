import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#2c3e50] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">I&apos;m Cameron Witkowski</h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
              Welcome to my website. Here you can read about me, check out some cool projects I&apos;ve done,
              browse my publications, and read some of my creative writing.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
              <Link
                href="/projects"
                className="bg-[#1abc9c] text-white px-6 py-3 rounded font-semibold hover:bg-[#16a085] transition-colors"
              >
                View Projects
              </Link>
              <Link
                href="/publications"
                className="border border-white text-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-[#2c3e50] transition-colors"
              >
                Publications
              </Link>
            </div>
          </div>
          <div className="shrink-0">
            <Image
              src="https://cameronwitkowski.com/wp-content/uploads/2023/03/intense_scaleddown-1.png"
              alt="Cameron Witkowski"
              width={280}
              height={280}
              className="rounded-full object-cover border-4 border-[#1abc9c]"
            />
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#2c3e50] mb-6">About Me</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            I was born in Ajax and grew up in suburban Whitby, ON. I completed my undergraduate degree
            in Engineering Science at the University of Toronto, and I am currently pursuing a MASc.
            Though my training is in engineering, my ultimate passion is for life—real and artificial.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <a
              href="https://github.com/Cameron7195"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1abc9c] hover:text-[#16a085] font-semibold transition-colors"
            >
              GitHub
            </a>
            <span className="text-gray-300">|</span>
            <a
              href="https://linkedin.com/in/cameron-witkowski/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1abc9c] hover:text-[#16a085] font-semibold transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-gray-300">|</span>
            <a
              href="mailto:cwitkowski@rogers.com"
              className="text-[#1abc9c] hover:text-[#16a085] font-semibold transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Masters Thesis */}
      <section className="py-16 px-4 bg-[#f8f9fa]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#1abc9c] font-semibold uppercase tracking-wide text-sm mb-2">Masters Thesis</p>
              <h2 className="text-3xl font-bold text-[#2c3e50] mb-4">A Mathematical Model of Morphogenesis</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                My thesis explores the fundamental questions of biological development through the lens of
                mathematics and machine learning. Inspired by Conway&apos;s Game of Life, neural cellular
                automata, and Alphafold, I am building a Python engine powered by an equivariant neural network.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "How do cells know when to stop dividing?",
                  "How does differentiation govern structure?",
                  "How does symmetry breaking occur?",
                ].map((q) => (
                  <div key={q} className="flex items-start gap-3">
                    <span className="text-[#1abc9c] mt-0.5 shrink-0">▸</span>
                    <p className="text-gray-700 italic">&ldquo;{q}&rdquo;</p>
                  </div>
                ))}
              </div>
              <Link
                href="/projects/masters-thesis"
                className="inline-block bg-[#1abc9c] text-white px-6 py-3 rounded font-semibold hover:bg-[#16a085] transition-colors"
              >
                Learn More
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {["Experimental Data", "Model Design", "Training & Testing"].map((step, i) => (
                <div key={step} className="bg-white rounded-lg p-4 text-center shadow-sm border border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-[#1abc9c] text-white flex items-center justify-center font-bold text-lg mx-auto mb-3">
                    {i + 1}
                  </div>
                  <p className="text-sm font-medium text-gray-700">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Society for AGI */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <Image
                src="https://cameronwitkowski.com/wp-content/uploads/2024/09/new_logo.png"
                alt="Society for AGI"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-[#1abc9c] font-semibold uppercase tracking-wide text-sm mb-2">Founded 2023</p>
              <h2 className="text-3xl font-bold text-[#2c3e50] mb-4">Society for AGI</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                What started as two or three members has grown to over 45, with members at the University
                of Toronto and the California Institute of Technology. Our mission is to attract passionate,
                curious, and freethinking students and future leaders.
              </p>
              <a
                href="https://agi-society.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#1abc9c] text-white px-6 py-3 rounded font-semibold hover:bg-[#16a085] transition-colors"
              >
                Visit Our Website
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Drone Project */}
      <section className="py-16 px-4 bg-[#f8f9fa]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#1abc9c] font-semibold uppercase tracking-wide text-sm mb-2">Capstone Project</p>
              <h2 className="text-3xl font-bold text-[#2c3e50] mb-4">
                Drones to Ensure Nuclear Plant Safety in an Emergency
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                For my 4th year Capstone design project teamed with Ben Agro, Jerry Chen, and Connor Lee,
                we designed drones using a wide range of hardware and software tools under the theme of
                Nuclear Power Plant safety.
              </p>
              <Link
                href="/projects/drone-reactor-inspection"
                className="inline-block bg-[#1abc9c] text-white px-6 py-3 rounded font-semibold hover:bg-[#16a085] transition-colors"
              >
                Learn More
              </Link>
            </div>
            <div className="flex justify-center">
              <Image
                src="https://cameronwitkowski.com/wp-content/uploads/2023/03/drone.png"
                alt="Drone project"
                width={300}
                height={240}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Probabilistic Neurons */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <Image
                src="https://cameronwitkowski.com/wp-content/uploads/2023/02/data-science-icon-teal-6.png"
                alt="Neural network simulation"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-[#1abc9c] font-semibold uppercase tracking-wide text-sm mb-2">Simulation</p>
              <h2 className="text-3xl font-bold text-[#2c3e50] mb-4">Emergent Dynamics of Probabilistic Neurons</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                In this project, I created an array of 8,000 neurons, each connected to their nearest
                neighbours, and ran a simulation to see what emergent structures form from simple
                probabilistic firing rules.
              </p>
              <Link
                href="/projects/dynamics-of-probabilistic-neurons"
                className="inline-block bg-[#1abc9c] text-white px-6 py-3 rounded font-semibold hover:bg-[#16a085] transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Logic as Space */}
      <section className="py-16 px-4 bg-[#f8f9fa]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#1abc9c] font-semibold uppercase tracking-wide text-sm mb-2">Creative Writing</p>
              <h2 className="text-3xl font-bold text-[#2c3e50] mb-4">Logic as Space</h2>
              <p className="text-gray-600 leading-relaxed italic mb-6">
                &ldquo;A poem rethinking the realm of thought.&rdquo;
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                A poem that uses spatial and architectural metaphors to explore logical reasoning,
                demonstrating its own thesis through the language it employs.
              </p>
              <Link
                href="/writing/logic-as-space"
                className="inline-block bg-[#1abc9c] text-white px-6 py-3 rounded font-semibold hover:bg-[#16a085] transition-colors"
              >
                Read More
              </Link>
            </div>
            <div className="flex justify-center">
              <Image
                src="https://cameronwitkowski.com/wp-content/uploads/2023/02/data-science-icon-teal-2.png"
                alt="Logic as Space"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sexually Selected Computer Code */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <Image
                src="https://cameronwitkowski.com/wp-content/uploads/2023/02/data-science-icon-teal-3.png"
                alt="Evolutionary algorithms"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-[#1abc9c] font-semibold uppercase tracking-wide text-sm mb-2">Research</p>
              <h2 className="text-3xl font-bold text-[#2c3e50] mb-4">Sexually Selected Computer Code</h2>
              <p className="text-gray-600 leading-relaxed italic mb-4">
                &ldquo;Is DNA to life what code is to computers?&rdquo;
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                A pioneering attempt to blur the line between the digital and biological realms — optimizing
                computer programs using evolutionary algorithms by recombining their instructions in the
                same way that DNA is recombined through sexual selection.
              </p>
              <Link
                href="/projects/sexually-selected-computer-code"
                className="inline-block bg-[#1abc9c] text-white px-6 py-3 rounded font-semibold hover:bg-[#16a085] transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Undergrad Thesis */}
      <section className="py-16 px-4 bg-[#f8f9fa]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#1abc9c] font-semibold uppercase tracking-wide text-sm mb-2">Undergraduate Thesis</p>
              <h2 className="text-3xl font-bold text-[#2c3e50] mb-4">
                Integrating Biology, Engineering &amp; AI
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A novel approach to comprehensively model gene expression using cutting-edge machine learning
                techniques, integrating a biological understanding of transcription with an engineering
                and AI background.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                330 million supervised examples sourced from GTEx cell-specific gene expression experiments.
              </p>
              <Link
                href="/projects/undergrad-thesis"
                className="inline-block bg-[#1abc9c] text-white px-6 py-3 rounded font-semibold hover:bg-[#16a085] transition-colors"
              >
                Learn More
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {["Experimental Data", "Model Design", "Training & Testing"].map((step, i) => (
                <div key={step} className="bg-white rounded-lg p-4 text-center shadow-sm border border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-[#2c3e50] text-white flex items-center justify-center font-bold text-lg mx-auto mb-3">
                    {i + 1}
                  </div>
                  <p className="text-sm font-medium text-gray-700">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#1abc9c] text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-white/90 mb-8 max-w-xl mx-auto">
          Interested in collaboration, research, or just a good conversation? I&apos;d love to hear from you.
        </p>
        <a
          href="mailto:cwitkowski@rogers.com"
          className="inline-block bg-white text-[#1abc9c] px-8 py-3 rounded font-bold hover:bg-gray-100 transition-colors"
        >
          cwitkowski@rogers.com
        </a>
      </section>
    </>
  );
}
