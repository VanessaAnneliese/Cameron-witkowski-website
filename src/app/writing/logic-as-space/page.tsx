import Link from "next/link";

export default function LogicAsSpacePage() {
  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundColor: "#1a1a1a",
        backgroundImage: `
          linear-gradient(30deg, #222 12%, transparent 12.5%, transparent 87%, #222 87.5%),
          linear-gradient(150deg, #222 12%, transparent 12.5%, transparent 87%, #222 87.5%),
          linear-gradient(30deg, #222 12%, transparent 12.5%, transparent 87%, #222 87.5%),
          linear-gradient(150deg, #222 12%, transparent 12.5%, transparent 87%, #222 87.5%),
          linear-gradient(60deg, #1d1d1d 25%, transparent 25.5%, transparent 75%, #1d1d1d 75%),
          linear-gradient(60deg, #1d1d1d 25%, transparent 25.5%, transparent 75%, #1d1d1d 75%)
        `,
        backgroundSize: "40px 70px",
        backgroundPosition: "0 0, 0 0, 20px 35px, 20px 35px, 0 0, 20px 35px",
      }}
    >
      {/* Teal diagonal left panel */}
      <div
        className="absolute top-0 left-0 h-full w-72 pointer-events-none"
        style={{ background: "#1abc9c", clipPath: "polygon(0 0, 55% 0, 30% 100%, 0 100%)" }}
      />

      {/* Teal hexagon outline — top right */}
      <svg
        className="absolute top-8 right-0 translate-x-1/4 pointer-events-none"
        width="280"
        height="280"
        viewBox="0 0 100 100"
        fill="none"
      >
        <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" stroke="#1abc9c" strokeWidth="2.5" fill="none" />
      </svg>

      {/* Content */}
      <div className="relative z-10 px-6 pt-16 pb-20">
        {/* Title */}
        <div className="mb-12 ml-4 md:ml-10">
          <h1
            className="text-5xl md:text-6xl font-bold text-white leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Logic as <em>Space</em>
          </h1>
        </div>

        {/* Poem */}
        <div
          className="text-white text-center max-w-xl mx-auto space-y-8 text-lg leading-loose"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          <div>
            <p>Make a <em>point</em>, to make a point.</p>
            <p>And <em>extension</em>, by extension.</p>
            <p>Now we have a <em>line</em> of reason,</p>
            <p>You agree on this <em>dimension?</em></p>
          </div>
          <div>
            <p>But complain that if I&apos;m <em>right,</em></p>
            <p><em>Surface</em> findings are hot air.</p>
            <p>That won&apos;t be cor-<em>rect</em> to write,</p>
            <p>When we <em>frame</em> discussion there.</p>
          </div>
          <div>
            <p>Once we make a <em>solid</em> start,</p>
            <p>We add <em>substance</em> to my view.</p>
            <p>I will sketch out every <em>part,</em></p>
            <p>Just the <em>building</em>&apos;s left to do.</p>
          </div>
          <div>
            <p>To <em>construct</em> an argument,</p>
            <p>Solid <em>ground</em> should be desired,</p>
            <p>Premises <em>fill</em> in cement.</p>
            <p>A <em>foundation</em> is required.</p>
          </div>
          <div>
            <p>If it&apos;s <em>based</em> on something weak,</p>
            <p>If your statements aren&apos;t kept <em>straight,</em></p>
            <p><em>Hollow</em> words are all you speak,</p>
            <p>Which will simply bear no <em>weight.</em></p>
          </div>
          <div>
            <p><em>Gravity</em> cannot be banned;</p>
            <p>Fortify to not be felled.</p>
            <p>Any error will not <em>stand,</em></p>
            <p>Only truth will be upheld.</p>
          </div>
          <div>
            <p>Is this all coincidence?</p>
            <p>Two-fold meanings in each case?</p>
            <p>Have I mixed up every sense?</p>
            <p>Is one outside time and <em>space?</em></p>
          </div>
        </div>

        {/* Back link */}
        <div className="mt-16 text-center">
          <Link href="/writing" className="text-[#1abc9c] hover:text-white transition-colors text-sm font-medium">
            ← Back to Writing
          </Link>
        </div>
      </div>
    </div>
  );
}
