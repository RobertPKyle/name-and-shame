import type { Metadata } from "next";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Name & Shame",
  description: "A list of companies known to ghost candidates during the hiring process.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0f0f0f] text-[#e5e5e5] antialiased">
        <nav className="border-b border-zinc-800 bg-[#0f0f0f] sticky top-0 z-50">
          <div className="max-w-5xl mx-auto px-4 py-4 flex items-center gap-8">
            <Link href="/" className="text-red-500 font-bold text-xl tracking-tight hover:text-red-400 transition-colors">
              Name &amp; Shame
            </Link>
            <div className="flex gap-6 text-sm">
              <Link href="/" className="text-zinc-400 hover:text-white transition-colors">
                Companies
              </Link>
              <Link href="/recruiters" className="text-zinc-400 hover:text-white transition-colors">
                Recruiters
              </Link>
              <Link href="/about" className="text-zinc-400 hover:text-white transition-colors">
                About &amp; Resources
              </Link>
            </div>
          </div>
        </nav>
        <main className="max-w-5xl mx-auto px-4 py-10">
          {children}
        </main>
        <Analytics />
        <footer className="border-t border-zinc-800 mt-20">
          <div className="max-w-5xl mx-auto px-4 py-6 text-center text-zinc-600 text-sm">
            Name &amp; Shame — holding companies accountable for ghosting candidates.
          </div>
        </footer>
      </body>
    </html>
  );
}
