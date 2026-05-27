import Image from "next/image";
import Link from "next/link";

/* ── Geometric decoration SVGs ── */
function TealHexStripes() {
  return (
    <div className="absolute top-0 left-0 w-36 h-40 overflow-hidden" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}>
      <div className="w-full h-full bg-[#1abc9c] relative overflow-hidden">
        {Array.from({ length: 14 }).map((_, i) => (
          <div key={i} className="absolute w-full h-[6px] bg-black" style={{ top: `${i * 14}px` }} />
        ))}
      </div>
    </div>
  );
}

function CircleOutline({ size = 80, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" className={className}>
      <circle cx="40" cy="40" r="36" stroke="black" strokeWidth="3" />
    </svg>
  );
}

function ZigZag({ className = "" }: { className?: string }) {
  return (
    <svg width="140" height="40" viewBox="0 0 140 40" fill="none" className={className}>
      <polyline points="0,30 25,10 50,30 75,10 100,30 125,10 140,20" stroke="black" strokeWidth="3" fill="none" />
    </svg>
  );
}

function CrossShape({ className = "" }: { className?: string }) {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className={className}>
      {/* 3D cross/plus with teal accent */}
      <rect x="40" y="5" width="40" height="110" stroke="black" strokeWidth="2" fill="white" />
      <rect x="5" y="40" width="110" height="40" stroke="black" strokeWidth="2" fill="white" />
      {/* teal top-right face */}
      <polygon points="80,5 120,5 120,45 80,45" fill="#1abc9c" stroke="black" strokeWidth="1.5" />
      <line x1="80" y1="5" x2="120" y2="5" stroke="black" strokeWidth="2" />
    </svg>
  );
}

function CurvedShape({ className = "" }: { className?: string }) {
  return (
    <svg width="120" height="80" viewBox="0 0 120 80" fill="none" className={className}>
      <path d="M10,70 Q10,10 60,10 Q110,10 110,70" stroke="black" strokeWidth="3" fill="none" />
    </svg>
  );
}

function FilledCircle({ size = 30, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 30 30" className={className}>
      <circle cx="15" cy="15" r="13" fill="black" />
    </svg>
  );
}

function HexOutline({ size = 100, color = "#1abc9c", strokeWidth = 3, className = "" }: { size?: number; color?: string; strokeWidth?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
      <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" stroke={color} strokeWidth={strokeWidth} fill="none" />
    </svg>
  );
}

function TealTriangle({ className = "" }: { className?: string }) {
  return (
    <svg width="120" height="80" viewBox="0 0 120 80" fill="none" className={className}>
      <polygon points="0,80 120,80 60,0" fill="#1abc9c" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative bg-white overflow-hidden min-h-[600px] flex items-center justify-center py-16">
        {/* Decorations */}
        <div className="absolute top-0 left-0">
          <TealHexStripes />
        </div>
        <ZigZag className="absolute top-16 left-36" />
        <FilledCircle size={32} className="absolute left-16 top-72" />
        <FilledCircle size={10} className="absolute left-8 bottom-16" />
        <CircleOutline size={90} className="absolute top-12 right-32" />
        <CrossShape className="absolute top-8 right-0 -translate-x-4" />
        <CurvedShape className="absolute bottom-16 right-16" />

        {/* Hexagon */}
        <div
          className="relative z-10 flex items-center justify-center"
          style={{ width: 660, height: 660 }}
        >
          <div
            className="w-full h-full bg-black flex flex-col items-center justify-center px-20 text-center"
            style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
          >
            <h1
              className="text-white font-bold leading-tight mb-4"
              style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
            >
              I&apos;m<br />Cameron<br />Witkowski
            </h1>
            <p
              className="text-white text-sm leading-loose px-4"
              style={{ fontFamily: "var(--font-space-mono)", fontSize: "0.72rem" }}
            >
              Welcome to my website. Here you can read{" "}
              <a href="#about" className="underline text-[#1abc9c]">about me</a>
              , check out some cool{" "}
              <Link href="/projects" className="underline text-[#1abc9c]">projects</Link>
              {" "}I&apos;ve done, browse my{" "}
              <Link href="/publications" className="underline text-[#1abc9c]">publications</Link>
              , and read some of my creative{" "}
              <Link href="/writing" className="underline text-[#1abc9c]">writing</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* ── ABOUT / BIO ── */}
      <section id="about" className="py-16 px-6 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p
              className="font-bold mb-6 text-gray-500 italic"
              style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.1rem, 2.2vw, 1.4rem)", lineHeight: 1.65 }}
            >
              I was born in Ajax and grew up in suburban Whitby, ON.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              At 18, I moved to Toronto to pursue a bachelor&apos;s degree in the Engineering Science
              program at the University of Toronto, specializing in Robotics, and went on to begin a
              MASc in Electrical and Computer Engineering. I left partway through to co-found{" "}
              <a href="https://aibread.com" target="_blank" rel="noopener noreferrer">Bread Technologies</a>,
              an AI startup backed by Menlo Ventures. In work, study, and leisure, my ultimate passion
              is for life—real and artificial.
            </p>
            <Link
              href="/story"
              className="mt-4 inline-block border border-[#1abc9c] text-[#1abc9c] px-8 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-[#1abc9c] hover:text-white transition-colors"
              style={{ fontFamily: "var(--font-space-mono)" }}
            >
              Read My Story
            </Link>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/linkedIn_shot.png"
              alt="Cameron Witkowski"
              width={420}
              height={520}
              className="object-cover rounded"
            />
          </div>
        </div>
      </section>

      {/* ── BREAD TECHNOLOGIES ── */}
      <section className="py-20 px-6 bg-[#2c3e50] relative overflow-hidden">
        {/* Decorative teal hex */}
        <svg className="absolute right-0 top-0 opacity-10 pointer-events-none" width="340" height="340" viewBox="0 0 100 100" fill="none">
          <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" stroke="#1abc9c" strokeWidth="2" fill="none" />
        </svg>
        <svg className="absolute left-8 bottom-0 opacity-10 pointer-events-none" width="180" height="180" viewBox="0 0 100 100" fill="none">
          <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" stroke="#1abc9c" strokeWidth="2" fill="none" />
        </svg>

        <div className="max-w-5xl mx-auto relative z-10">
          <p className="text-[#1abc9c] font-semibold uppercase tracking-widest text-sm mb-3">Co-Founder</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
            Bread Technologies
          </h2>
          <p className="text-gray-300 text-xl italic mb-10 max-w-2xl" style={{ fontFamily: "var(--font-playfair)" }}>
            We believe AI is about to radically transform commerce on the web.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-5 text-gray-300 leading-relaxed text-lg">
              <p>
                AI systems are describing, comparing, and recommending businesses to customers
                in conversations that analytics don&apos;t capture. 94% of B2B buyers now use
                LLMs during purchase research — yet AI referrals account for just 1% of tracked
                traffic. That gap is the problem we&apos;re solving.
              </p>
              <p>
                At Bread, we build tools that give businesses visibility into how AI talks about
                them. Our flagship product, <strong className="text-white">OpenLens</strong>, is
                a free tool that reveals how AI systems discuss your business — and what you can
                do about it.
              </p>
              <p>
                We&apos;re a six-person team with backgrounds from U of T Engineering, Caltech,
                AWS, Intel, and Georgia Tech, backed by <strong className="text-white">$5M seed
                funding from Menlo Ventures</strong>.
              </p>
              <a
                href="https://aibread.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 border border-[#1abc9c] text-[#1abc9c] px-8 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-[#1abc9c] hover:text-white transition-colors"
                style={{ fontFamily: "var(--font-space-mono)" }}
              >
                Visit Bread Technologies
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: "$5M", label: "Seed round led by Menlo Ventures" },
                { stat: "94%", label: "of B2B buyers use LLMs during purchase research" },
                { stat: "6", label: "Person team from top engineering programs" },
                { stat: "1%", label: "of AI referral traffic is currently tracked — we fix that" },
              ].map(({ stat, label }) => (
                <div key={stat} className="border border-gray-600 rounded-lg p-5">
                  <p className="text-[#1abc9c] text-3xl font-bold mb-2" style={{ fontFamily: "var(--font-space-mono)" }}>{stat}</p>
                  <p className="text-gray-400 text-sm leading-snug">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PODCAST ── */}
      <section className="py-16 px-6 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p
              className="text-2xl text-gray-800 leading-relaxed text-center md:text-left"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              I appeared on the Machine Learning Street Talk podcast with my friend Aman Bhargava.
            </p>
          </div>
          <div className="aspect-video bg-gray-900 rounded overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Bpgloy1dDn0"
              title="Machine Learning Street Talk — Mapping GPT revealed something strange"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* ── SOCIETY FOR AGI ── */}
      <section className="py-16 px-6 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 items-center">
          <div className="md:col-span-1 text-right">
            <h2 className="text-3xl font-bold text-gray-900 leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
              In 2023, I founded the Society for AGI
            </h2>
          </div>
          <div className="md:col-span-1 flex justify-center">
            <div className="w-full aspect-square flex items-center justify-center rounded">
              <Image
                src="/images/new_logo.png"
                alt="Society for AGI logo"
                width={220}
                height={220}
                className="object-contain"
              />
            </div>
          </div>
          <div className="md:col-span-1">
            <p className="text-gray-600 leading-relaxed mb-3">
              We attract passionate, curious, and freethinking students &amp; future leaders from all
              disciplines to explore cutting-edge ideas, build cool stuff, and participate in the most
              important conversation of our age.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              After one year, we&apos;ve grown from just two or three members to over 45, with members at
              the University of Toronto and the California Institute of Technology.
            </p>
            <a
              href="https://www.societyforagi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-[#1abc9c] text-[#1abc9c] px-6 py-2.5 text-sm font-medium hover:bg-[#1abc9c] hover:text-white transition-colors"
            >
              Visit our website
            </a>
          </div>
        </div>
      </section>

      {/* ── MASTERS THESIS ── */}
      <section className="py-16 px-6 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>Masters Thesis</h2>
          <p className="text-gray-500 mb-10">A Mathematical Model of Morphogenesis</p>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <video
                className="w-full rounded"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/images/brain_edited.mp4" type="video/mp4" />
              </video>
              <div className="mt-4">
                <Link href="/projects/masters-thesis" className="inline-block border border-[#1abc9c] text-[#1abc9c] px-6 py-2.5 text-sm font-medium hover:bg-[#1abc9c] hover:text-white transition-colors">
                  Learn more
                </Link>
              </div>
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                I built a simple mathematical formalism that captures a wide range of problems in
                developmental biology, and that enables precise analysis of questions in embryology:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "How do cells know when to stop dividing?",
                  "How does differentiation govern structure?",
                  "How does symmetry breaking occur?",
                  "Etc.",
                ].map((q) => (
                  <li key={q} className="flex items-start gap-2 text-gray-700">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-700 shrink-0" />
                    {q}
                  </li>
                ))}
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                To demonstrate the ease and efficacy of the formalism, I built a Python engine to
                simulate developmental trajectories and trained an equivariant neural network to learn
                cellular interaction dynamics. The video on the left shows one simulation after the
                network learned to form a spherical cellular shell.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Inspired by{" "}
                <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" target="_blank" rel="noopener noreferrer" className="text-[#1abc9c] hover:underline">Conway&apos;s Game of Life</a>,{" "}
                <a href="https://distill.pub/2020/growing-ca/" target="_blank" rel="noopener noreferrer" className="text-[#1abc9c] hover:underline">neural cellular automata</a>, and{" "}
                <a href="https://www.nature.com/articles/s41586-021-03819-2" target="_blank" rel="noopener noreferrer" className="text-[#1abc9c] hover:underline">Alphafold</a>,
                {" "}this project aims to answer how complex, 3D structures can form by simple, local interaction rules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── DRONE PROJECT ── */}
      <section className="py-16 px-6 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-video flex items-center justify-center rounded overflow-hidden">
            <Image
              src="/images/drone.png"
              alt="Drone reactor inspection"
              width={480}
              height={300}
              className="object-contain p-6"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-snug" style={{ fontFamily: "var(--font-playfair)" }}>
              Drones to Ensure Nuclear Plant Safety in an Emergency
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              For my 4th year Capstone design project teamed with Ben Agro, Jerry Chen, and Connor Lee
              we designed drones using a wide range of hardware and software tools under the theme of
              Nuclear Power Plant safety.
            </p>
            <Link
              href="/projects/drone-reactor-inspection"
              className="inline-block bg-[#1abc9c] text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#16a085] transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* ── IMAGE CARDS: Neurons + Logic as Space ── */}
      <section className="border-t border-gray-100">
        <div className="grid md:grid-cols-2">
          {/* Neurons card */}
          <Link href="/projects/dynamics-of-probabilistic-neurons" className="group relative aspect-[4/3] overflow-hidden bg-gray-900 block">
            <Image
              src="/images/brain_image.png"
              alt="Emergent Dynamics of Probabilistic Neurons"
              fill
              className="object-cover opacity-60 group-hover:opacity-70 transition-opacity"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-white font-bold text-xl" style={{ fontFamily: "var(--font-playfair)" }}>
                Emergent Dynamics of Probabilistic Neurons
              </h3>
              <p className="text-gray-300 text-sm mt-1">An 8,000 neuron simulation</p>
            </div>
          </Link>

          {/* Logic as Space card */}
          <Link href="/writing/logic-as-space" className="group relative aspect-[4/3] overflow-hidden bg-purple-900 block">
            <Image
              src="/images/brain-1.png"
              alt="Logic as Space"
              fill
              className="object-cover opacity-80 group-hover:opacity-90 transition-opacity"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
              <h3 className="text-white font-bold text-xl" style={{ fontFamily: "var(--font-playfair)" }}>
                Logic as <em>Space</em>
              </h3>
              <p className="text-gray-300 text-sm mt-1">A poem rethinking the realm of thought.</p>
            </div>
          </Link>
        </div>
      </section>

      {/* ── UNDERGRAD THESIS (BLACK) ── */}
      <section className="relative bg-black text-white overflow-hidden py-16 px-6">
        {/* Teal diagonal shape */}
        <div
          className="absolute top-0 left-0 w-72 h-full"
          style={{ background: "#1abc9c", clipPath: "polygon(0 0, 60% 0, 30% 100%, 0 100%)" }}
        />
        {/* Hexagon outline decoration */}
        <HexOutline size={180} className="absolute top-8 right-8 opacity-80" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="md:ml-64">
            <h2
              className="text-5xl md:text-6xl font-bold text-white mb-8"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Undergraduate Thesis
            </h2>
            <p
              className="text-white leading-loose max-w-xl mb-12 text-sm"
              style={{ fontFamily: "var(--font-space-mono)" }}
            >
              Integrating a biological understanding of transcription with an engineering &amp; AI
              background, I present a novel approach to comprehensively model gene expression using
              cutting-edge machine learning techniques.
            </p>

            <div className="grid grid-cols-3 gap-8 max-w-2xl">
              {[
                {
                  img: "/images/data-science-icon-teal-2.png",
                  title: "Experimental Data",
                  desc: "I collected and preprocessed over 330 million supervised examples sourced from GTEx cell-specific gene expression experiments.",
                },
                {
                  img: "/images/data-science-icon-teal-3.png",
                  title: "Model Design",
                  desc: "I designed a new model for this data taking full advantage of mechanisms known to be important for transcription.",
                },
                {
                  img: "/images/data-science-icon-teal-6.png",
                  title: "Training & Testing",
                  desc: "I trained my model repeatedly, keeping close track of its validation performance in order to optimize its architecture.",
                },
              ].map((item) => (
                <div key={item.title}>
                  <div className="mb-4 h-14 flex items-end">
                    <Image src={item.img} alt={item.title} width={48} height={48} className="object-contain" />
                  </div>
                  <p
                    className="text-[#1abc9c] font-bold mb-2 text-sm"
                    style={{ fontFamily: "var(--font-space-mono)" }}
                  >
                    {item.title}
                  </p>
                  <p className="text-gray-300 text-xs leading-relaxed" style={{ fontFamily: "var(--font-space-mono)" }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="relative bg-white overflow-hidden py-20 px-6">
        {/* Geometric decorations */}
        <ZigZag className="absolute top-12 left-8" />
        <FilledCircle size={30} className="absolute top-20 left-6" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-32 border-l-2 border-b-2 border-black ml-8" />
        <CrossShape className="absolute top-8 right-0" />
        <CircleOutline size={60} className="absolute bottom-20 right-16" />
        <TealTriangle className="absolute bottom-8 left-1/2 -translate-x-1/2" />

        <div className="relative z-10 flex justify-center">
          <div className="bg-black text-white p-12 md:p-16 max-w-2xl w-full">
            <h2
              className="text-5xl font-bold mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Contact Me
            </h2>
            <p className="text-gray-300 mb-10">Don&apos;t hesitate to reach out!</p>
            <div className="flex justify-end mb-8">
              <a
                href="mailto:cwitkowski@rogers.com"
                className="bg-[#1abc9c] text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#16a085] transition-colors"
              >
                Get in Touch
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
              <a href="https://github.com/Cameron7195" target="_blank" rel="noopener noreferrer" className="hover:text-[#1abc9c] transition-colors">Github</a>
              <a href="https://linkedin.com/in/cameron-witkowski/" target="_blank" rel="noopener noreferrer" className="hover:text-[#1abc9c] transition-colors">LinkedIn</a>
              <a href="mailto:cwitkowski@rogers.com" className="hover:text-[#1abc9c] transition-colors">cwitkowski@rogers.com</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
