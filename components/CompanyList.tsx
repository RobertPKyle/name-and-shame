"use client";

import { useState, useMemo } from "react";

type Company = {
  id: number;
  name: string;
  tags: string[];
  notes: string;
};

const ALL_TAGS = [
  "Ghosted After Interview",
  "No Response",
  "No Feedback",
  "Rejected Without Feedback",
  "Rescinded Offer",
  "Long Process",
];

const TAG_COLORS: Record<string, string> = {
  "Ghosted After Interview": "bg-red-900/50 text-red-300 border-red-800",
  "No Response":             "bg-orange-900/50 text-orange-300 border-orange-800",
  "No Feedback":             "bg-yellow-900/50 text-yellow-300 border-yellow-800",
  "Rejected Without Feedback": "bg-purple-900/50 text-purple-300 border-purple-800",
  "Rescinded Offer":         "bg-pink-900/50 text-pink-300 border-pink-800",
  "Long Process":            "bg-blue-900/50 text-blue-300 border-blue-800",
};

function Tag({ label }: { label: string }) {
  const color = TAG_COLORS[label] ?? "bg-zinc-800 text-zinc-300 border-zinc-700";
  return (
    <span className={`text-xs px-2 py-0.5 rounded border ${color}`}>
      {label}
    </span>
  );
}

export default function CompanyList({ companies }: { companies: Company[] }) {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return companies.filter((c) => {
      const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase());
      const matchesTag = activeTag ? c.tags.includes(activeTag) : true;
      return matchesSearch && matchesTag;
    });
  }, [companies, search, activeTag]);

  return (
    <div>
      {/* Search + Filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Search companies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 bg-zinc-900 border border-zinc-700 rounded px-4 py-2 text-white placeholder-zinc-500 focus:outline-none focus:border-red-600 transition-colors"
        />
      </div>

      {/* Tag filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveTag(null)}
          className={`text-xs px-3 py-1 rounded border transition-colors cursor-pointer ${
            activeTag === null
              ? "bg-red-600 border-red-600 text-white"
              : "bg-zinc-900 border-zinc-700 text-zinc-400 hover:border-zinc-500"
          }`}
        >
          All
        </button>
        {ALL_TAGS.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
            className={`text-xs px-3 py-1 rounded border transition-colors cursor-pointer ${
              activeTag === tag
                ? "bg-red-600 border-red-600 text-white"
                : "bg-zinc-900 border-zinc-700 text-zinc-400 hover:border-zinc-500"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Results count */}
      <p className="text-zinc-500 text-sm mb-6">
        {filtered.length} {filtered.length === 1 ? "company" : "companies"} found
      </p>

      {/* Company cards */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-zinc-600">
          No companies match your search.
        </div>
      ) : (
        <div className="grid gap-4">
          {filtered.map((company) => (
            <div
              key={company.id}
              className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 hover:border-zinc-600 transition-colors"
            >
              <h2 className="text-lg font-semibold text-white mb-2">{company.name}</h2>
              <p className="text-zinc-400 text-sm mb-4">{company.notes}</p>
              <div className="flex flex-wrap gap-2">
                {company.tags.map((tag) => (
                  <Tag key={tag} label={tag} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
