import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <p className="text-[#1abc9c] font-semibold uppercase tracking-wide text-sm mb-2">Legal</p>
      <h1 className="text-4xl font-bold text-[#2c3e50] mb-3">Privacy Policy</h1>
      <p className="text-gray-500 italic mb-12">Last updated: 2026</p>

      <div className="space-y-8 text-gray-700 leading-relaxed text-lg">
        <section>
          <h2 className="text-2xl font-bold text-[#2c3e50] mb-3">Overview</h2>
          <p>
            This Privacy Policy describes how cameronwitkowski.com (the &ldquo;Site&rdquo;) handles
            information when you visit. This is a personal portfolio site and does not collect,
            store, or sell personal data.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#2c3e50] mb-3">Information Collected</h2>
          <p>
            This Site does not use forms, accounts, or tracking systems that collect personal
            information. If you contact Cameron directly via email, your email address and message
            content are used solely to respond to your inquiry.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#2c3e50] mb-3">Cookies</h2>
          <p>
            This Site does not use cookies or any client-side tracking technologies for analytics
            or advertising purposes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#2c3e50] mb-3">Third-Party Services</h2>
          <p>
            This Site embeds content from YouTube (for the podcast section). YouTube may set its
            own cookies when you interact with embedded videos. Please refer to{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              Google&apos;s Privacy Policy
            </a>{" "}
            for details.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#2c3e50] mb-3">Hosting</h2>
          <p>
            This Site is hosted on Vercel. Vercel may collect standard server log data (such as IP
            addresses) as part of their infrastructure. Please refer to{" "}
            <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
              Vercel&apos;s Privacy Policy
            </a>{" "}
            for details.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#2c3e50] mb-3">Changes to This Policy</h2>
          <p>
            This policy may be updated from time to time. Any changes will be reflected on this page.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#2c3e50] mb-3">Contact</h2>
          <p>
            Questions about this policy may be directed to{" "}
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
