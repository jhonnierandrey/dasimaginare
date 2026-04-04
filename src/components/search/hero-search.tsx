"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type HeroSearchProps = {
  initialValue?: string;
  compact?: boolean;
};

export function HeroSearch({
  initialValue = "",
  compact = false,
}: HeroSearchProps) {
  const router = useRouter();
  const [search, setSearch] = useState(initialValue);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const trimmed = search.trim();
    if (!trimmed) return;

    const params = new URLSearchParams({
      search: trimmed,
      page: "1",
      orientation: "all",
    });

    router.push(`/images?${params.toString()}`);
  }

  return (
    <section className="relative overflow-hidden">
      {!compact && (
        <>
          <div
            className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://picsum.photos/1920/1080')",
            }}
          />
          <div className="absolute inset-0 -z-10 bg-black/65" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_35%)]" />
          <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2">
            <div className="pointer-events-auto rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-white/60 backdrop-blur transition hover:text-white">
              Background by{" "}
              <a
                href="https://picsum.photos/"
                target="_blank"
                rel="noreferrer"
                className="underline-offset-2 hover:underline"
              >
                Lorem Picsum
              </a>
            </div>
          </div>
        </>
      )}

      <div
        className={`mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-6 text-center ${
          compact ? "py-4" : "min-h-[calc(100vh-4rem)] py-16"
        }`}
      >
        {!compact && (
          <>
            <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs tracking-wide text-white/80 backdrop-blur">
              Free image discovery, reimagined
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              Search beautiful free images with a cleaner, modern experience.
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-6 text-white/75 sm:text-base">
              Imaginäre helps you explore Pixabay-powered imagery through a
              faster, simpler, and more polished interface.
            </p>
          </>
        )}

        <form
          onSubmit={handleSubmit}
          className={`flex w-full max-w-3xl flex-col gap-3 rounded-3xl border border-white/10 bg-black/30 p-3 shadow-2xl backdrop-blur-xl sm:flex-row ${
            compact ? "mt-0" : "mt-10"
          }`}
        >
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/45" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search mountains, technology, cities..."
              className="h-12 border-white/10 bg-white/5 pl-10 text-white placeholder:text-white/35 focus-visible:ring-1 focus-visible:ring-white/20"
            />
          </div>

          <Button
            type="submit"
            className="h-12 rounded-2xl px-6 text-sm font-medium"
          >
            Search Images
          </Button>
        </form>

        {!compact && (
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-white/60">
            <span>Try:</span>
            {[
              "Mountains",
              "Architecture",
              "Nature",
              "Technology",
              "Travel",
            ].map((term) => (
              <button
                key={term}
                type="button"
                onClick={() =>
                  router.push(
                    `/images?search=${encodeURIComponent(
                      term.toLowerCase(),
                    )}&page=1&orientation=all`,
                  )
                }
                className="rounded-full border border-white/10 bg-white/10 px-3 py-1 transition hover:bg-white/15 hover:text-white"
              >
                {term}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
