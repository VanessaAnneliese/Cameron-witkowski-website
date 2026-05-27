import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <p className="text-[#1abc9c] font-semibold uppercase tracking-wide text-sm mb-2">Legal</p>
      <h1 className="text-4xl font-bold text-[#2c3e50] mb-3">Terms of Use</h1>
      <p className="text-gray-500 italic mb-12">Last updated: 2024</p>

      <div className="space-y-8 text-gray-700 leading-relaxed text-lg">
        <section>
          <h2 className="text-2xl font-bold text-[#2c3e50] mb-3">Acceptance of Terms</h2>
          <p>
            By accessing and using cameronwitkowski.com (the &ldquo;Site&rdquo;), you accept and agree
            to be bound by these Terms of Use. If you do not agree, please do not use the Site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#2c3e50] mb-3">Intellectual Property</h2>
          <p>
            All content on this Site — including text, images, code, and design — is the property of
            Cameron S. Witkowski unless otherwise noted. You may not reproduce, distribute, or use any
            content without prior written permission.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#2c3e50] mb-3">Use of the Site</h2>
          <p>
            This Site is provided for personal, informational, and educational purposes only. You agree
            not to use the Site for any unlawful purpose or in any way that could damage, disable, or
            impair the Site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#2c3e50] mb-3">External Links</h2>
          <p>
            The Site may contain links to third-party websites. These links are provided for convenience
            only. Cameron S. Witkowski has no control over the content of those sites and accepts no
            responsibility for them.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#2c3e50] mb-3">Disclaimer</h2>
          <p>
            The content on this Site is provided &ldquo;as is&rdquo; without any warranties of any kind.
            Cameron S. Witkowski makes no representations about the accuracy or completeness of any
            information on the Site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#2c3e50] mb-3">Changes to These Terms</h2>
          <p>
            These terms may be updated from time to time. Continued use of the Site after any changes
            constitutes your acceptance of the new terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#2c3e50] mb-3">Contact</h2>
          <p>
            Questions about these terms may be directed to{" "}
            <a href="mailto:cwitkowski@rogers.com">cwitkowski@rogers.com</a>.
          </p>
        </section>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <Link href="/" className="text-[#1abc9c] hover:text-[#16a085] font-semibold transition-colors">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
