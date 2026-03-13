export default function AboutPage() {
  return (
    <div className="max-w-2xl">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white mb-2">About &amp; Resources</h1>
        <p className="text-zinc-400">
          What this site is, why it exists, and how to protect yourself during the job search.
        </p>
      </div>

      {/* About */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-white mb-4 border-b border-zinc-800 pb-2">
          What is Name &amp; Shame?
        </h2>
        <div className="text-zinc-400 space-y-3 text-sm leading-relaxed">
          <p>
            Name &amp; Shame is a community-driven resource that tracks companies and recruiters known for
            ghosting job candidates — disappearing after interviews, failing to follow up, rescinding offers
            without explanation, or stringing candidates along through multi-month processes only to go silent.
          </p>
          <p>
            Ghosting candidates is unprofessional and disrespectful. Candidates invest real time, energy, and
            emotional effort into the hiring process. The least a company can do is communicate.
          </p>
          <p>
            This site holds them accountable.
          </p>
        </div>
      </section>

      {/* Tips */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-white mb-4 border-b border-zinc-800 pb-2">
          Protecting Yourself During the Job Search
        </h2>
        <ul className="space-y-3 text-sm text-zinc-400">
          <li className="flex gap-3">
            <span className="text-red-500 font-bold mt-0.5">→</span>
            <span>
              <strong className="text-zinc-200">Set a follow-up deadline.</strong> If a company says they&apos;ll
              get back to you in a week and two weeks pass, send one follow-up email. If no response, move on.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-red-500 font-bold mt-0.5">→</span>
            <span>
              <strong className="text-zinc-200">Research before applying.</strong> Check Glassdoor, Blind, and
              Reddit for reports of poor hiring experiences before investing time in a lengthy process.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-red-500 font-bold mt-0.5">→</span>
            <span>
              <strong className="text-zinc-200">Never stop applying.</strong> Keep your pipeline full.
              Don&apos;t put all your energy into one opportunity until you have a signed offer.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-red-500 font-bold mt-0.5">→</span>
            <span>
              <strong className="text-zinc-200">Document everything.</strong> Keep notes on who you spoke to,
              what was promised, and key dates. This protects you and helps others if you share your experience.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-red-500 font-bold mt-0.5">→</span>
            <span>
              <strong className="text-zinc-200">Share your experience.</strong> Leave reviews on Glassdoor and
              LinkedIn. Your account might save someone else months of wasted time.
            </span>
          </li>
        </ul>
      </section>

      {/* Resources */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-white mb-4 border-b border-zinc-800 pb-2">
          External Resources
        </h2>
        <ul className="space-y-3 text-sm text-zinc-400">
          <li className="flex gap-3">
            <span className="text-red-500 font-bold mt-0.5">→</span>
            <span>
              <strong className="text-zinc-200">Glassdoor</strong> — Company reviews including interview
              experience reports from real candidates.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-red-500 font-bold mt-0.5">→</span>
            <span>
              <strong className="text-zinc-200">Blind</strong> — Anonymous professional community with candid
              discussion about company culture and hiring practices.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-red-500 font-bold mt-0.5">→</span>
            <span>
              <strong className="text-zinc-200">r/cscareerquestions</strong> — Reddit community for software
              engineers sharing hiring experiences and advice.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-red-500 font-bold mt-0.5">→</span>
            <span>
              <strong className="text-zinc-200">Levels.fyi</strong> — Compensation data and company info to
              help you evaluate offers and negotiate.
            </span>
          </li>
        </ul>
      </section>

      {/* Contribute */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-white mb-4 border-b border-zinc-800 pb-2">
          Add a Company
        </h2>
        <div className="text-zinc-400 space-y-3 text-sm leading-relaxed">
          <p>
            This site is open source. Companies are stored in a simple JSON file — no coding experience required
            to add one. Here&apos;s how:
          </p>
          <ol className="space-y-2 list-none">
            <li className="flex gap-3">
              <span className="text-red-500 font-bold shrink-0">1.</span>
              <span>
                Go to the{" "}
                <a
                  href="https://github.com/RobertPKyle/name-and-shame"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline hover:text-red-400 transition-colors"
                >
                  GitHub repository
                </a>{" "}
                and fork it.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-red-500 font-bold shrink-0">2.</span>
              <span>
                Open <code className="bg-zinc-800 px-1 py-0.5 rounded text-zinc-300">data/companies.json</code> and
                add an entry with a <code className="bg-zinc-800 px-1 py-0.5 rounded text-zinc-300">name</code>,{" "}
                <code className="bg-zinc-800 px-1 py-0.5 rounded text-zinc-300">tags</code>, and{" "}
                <code className="bg-zinc-800 px-1 py-0.5 rounded text-zinc-300">notes</code>.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-red-500 font-bold shrink-0">3.</span>
              <span>Submit a pull request. It will be reviewed before going live.</span>
            </li>
          </ol>
        </div>
      </section>

      {/* Disclaimer */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-4 border-b border-zinc-800 pb-2">
          Disclaimer
        </h2>
        <p className="text-zinc-500 text-sm leading-relaxed">
          Information on this site is submitted by the community and reflects individual experiences.
          Company behavior can change over time. Always do your own research before making career decisions.
          This site is not affiliated with any company listed.
        </p>
      </section>
    </div>
  );
}
