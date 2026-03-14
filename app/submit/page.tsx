"use client";

import { useActionState } from "react";
import { submitCompany, type SubmitState } from "@/app/actions/submitCompany";

const ALL_TAGS = [
  "Ghosting",
  "Slow response time",
  "More than 3 interviews",
  "Fake offers",
  "Lack of transparency",
  "Rude",
  "Lowballing",
  "Requires take home assessment",
  "Requires unpaid work",
  "Lies about remote work",
  "Fake company",
];

const initial: SubmitState = { status: "idle", message: "" };

export default function SubmitPage() {
  const [state, action, pending] = useActionState(submitCompany, initial);

  return (
    <div className="max-w-xl">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white mb-2">Submit a Company</h1>
        <p className="text-zinc-400">
          Had a bad experience with a company during the hiring process? Submit it here
          and we&apos;ll review it for the list.
        </p>
      </div>

      {state.status === "success" ? (
        <div className="bg-green-900/30 border border-green-700 rounded-lg p-6 text-center">
          <p className="text-green-400 font-semibold text-lg mb-1">Thank you!</p>
          <p className="text-green-300/70 text-sm">{state.message}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-5 text-sm text-zinc-400 hover:text-white underline transition-colors cursor-pointer"
          >
            Submit another
          </button>
        </div>
      ) : (
        <form action={action} className="space-y-6">
          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-zinc-300 mb-1.5">
              Company Name <span className="text-red-500">*</span>
            </label>
            <input
              id="companyName"
              name="companyName"
              type="text"
              required
              placeholder="e.g. Acme Corp"
              className="w-full bg-zinc-900 border border-zinc-700 rounded px-4 py-2.5 text-white placeholder-zinc-500 focus:outline-none focus:border-red-600 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">
              Tags <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {ALL_TAGS.map((tag) => (
                <label key={tag} className="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="tags"
                    value={tag}
                    className="hidden peer"
                  />
                  <span className="text-xs px-3 py-1.5 rounded border border-zinc-700 text-zinc-400 peer-checked:bg-red-600 peer-checked:border-red-600 peer-checked:text-white hover:border-zinc-500 transition-colors select-none">
                    {tag}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {state.status === "error" && (
            <p className="text-red-400 text-sm">{state.message}</p>
          )}

          <button
            type="submit"
            disabled={pending}
            className="w-full bg-red-600 hover:bg-red-500 disabled:bg-red-900 disabled:text-red-600 text-white font-semibold py-2.5 rounded transition-colors cursor-pointer disabled:cursor-not-allowed"
          >
            {pending ? "Sending..." : "Submit Company"}
          </button>
        </form>
      )}
    </div>
  );
}
