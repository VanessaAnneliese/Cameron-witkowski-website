import Image from "next/image";
import Link from "next/link";

export default function MyStoryPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">

      {/* Title — centered, large, Space Mono */}
      <h1
        className="text-center font-bold mb-16"
        style={{ fontFamily: "var(--font-space-mono)", fontSize: "clamp(3rem, 8vw, 5.5rem)", lineHeight: 1.1 }}
      >
        My Story
      </h1>

      {/* Lead sentence — large bold monospace, left-aligned */}
      <p
        className="font-bold mb-10 max-w-2xl"
        style={{ fontFamily: "var(--font-space-mono)", fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)", lineHeight: 1.65 }}
      >
        I grew up in the quiet, suburban town of Brooklin, ON.
      </p>

      {/* First section: text left, baby photo right */}
      <div className="grid md:grid-cols-2 gap-10 items-start mb-12">
        <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
          <p>
            I grew up in the quiet, suburban town of Brooklin, ON. I was entertained by the usual kid
            activities—baseball, video games, friends, etc.—but it was always my curiosity that could
            never be satisfied. Fortunately, I was among the first generation of kids who grew up with
            the ability to ask Google anything my parents couldn&apos;t answer. So, I got into a
            perpetual habit of wondering, asking questions, and searching for answers.
          </p>
          <p>
            As I learned more from my schooling and random curiosities, I began to find connections
            everywhere. For instance, I was (and still am) amazed to learn that everything in the
            physical world is composed of atoms, in combinations of just over 100 elements. And that
            the splitting apart of certain atoms, at my Dad&apos;s work at a nearby Nuclear plant, made
            the same power that turns on the lights and computers in my house.
          </p>
          <p>
            Throughout high school I fell in love with the maths and sciences. I soon came to believe
            these were the best tools humanity had to understand the world around us. I chose to pursue
            engineering for its integration of these fields with design and creation. After two years of
            general subject matter in the Engineering Science program, I decided to specialize in
            robotics for its synthesis of many different fields, including AI. I see a future marked by
            the widespread use of engineered, intelligent systems. As I look to the future, I hope to
            march straight to the frontier. All in all, what I plan to do with my life stems from my
            very conception of what life is.
          </p>
          <p>
            Of course, there are many definitions, and everyone has their own view. There is the
            biologist&apos;s that it consists in organisms made of dividing cells. There is the everyday
            definition of life as the condition of existence, as you might sigh and utter after a
            difficult day: &ldquo;well, that&apos;s life&rdquo;. There is its characterization as the
            opposite of death and destruction, as in the word &ldquo;lively&rdquo;. And there is the
            thing one intuitively feels that they possess, often referred to by the phrase
            &ldquo;my life&rdquo;.
          </p>
        </div>
        <div>
          <Image
            src="/images/baby.jpg"
            alt="Cameron as a child"
            width={500}
            height={400}
            className="object-cover rounded w-full"
          />
        </div>
      </div>

      {/* Second section: two images stacked left, last paragraphs right */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div className="space-y-4">
          <Image
            src="/images/computer_construct.png"
            alt="Cameron building a computer"
            width={500}
            height={380}
            className="object-cover rounded w-full"
          />
          <Image
            src="/images/linkedIn_shot.png"
            alt="Cameron Witkowski"
            width={500}
            height={400}
            className="object-cover rounded w-full"
          />
        </div>
        <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
          <p>
            I see these all as mere perspectives, points of view, or ways of looking at the same one
            thing—the thing we all have in common, that is, life. And considered in this way, biology,
            psychology, philosophy, neuroscience, and so much more, are seen to simply study aspects of
            this one life. So in my eyes, the design of intelligent systems, with robotics or AI, is
            not about economy, or glamour, or financial gain, but about the proliferation and
            flourishing of life. And as our machines become increasingly life-like, their sources of
            inspiration approach the very source of life—with neural networks, walking robots, and
            logic devices all prime examples. But where is this all going, and for what end do I
            ultimately aspire? The destination is nothing but the very source, and the end is just the
            beginning.
          </p>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <Link href="/" className="text-[#1abc9c] hover:text-[#16a085] font-semibold transition-colors">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
