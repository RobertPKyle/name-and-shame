export default function AboutPage() {
  return (
    <div className="max-w-2xl">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white mb-2">About &amp; Resources</h1>
        <p className="text-zinc-400">
          What this site is and how you can contribute!
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

      {/* Contribute */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-white mb-4 border-b border-zinc-800 pb-2">
          How to add a Company
        </h2>
        <div className="text-zinc-400 space-y-3 text-sm leading-relaxed">
          <p>
            This site is open source. Companies are stored in a simple JSON file — no coding experience required
            to add one. Add as many companies as you want. Here&apos;s how:
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
                add an entry with a <code className="bg-zinc-800 px-1 py-0.5 rounded text-zinc-300">name</code> and{" "}
                <code className="bg-zinc-800 px-1 py-0.5 rounded text-zinc-300">tags</code>.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-red-500 font-bold shrink-0">3.</span>
              <span>Submit a pull request. It will be reviewed before going live.</span>
            </li>
          </ol>
        </div>
      </section>

      {/* Support */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-white mb-4 border-b border-zinc-800 pb-2">
          Support the Site
        </h2>
        <div className="text-zinc-400 space-y-3 text-sm leading-relaxed">
          <p>
            This site is free, ad-free, and community-driven. If it&apos;s been useful to you,
            consider buying me a coffee — it helps keep the lights on.
          </p>
          <a
            href="https://buymeacoffee.com/retrorobert"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-1 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold text-sm px-5 py-2.5 rounded transition-colors"
          >
            Buy me a coffee
          </a>
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
