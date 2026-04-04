import Link from "next/link";
import { Suspense } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HeroSearch } from "@/components/search/hero-search";
import { FiltersBar } from "@/components/search/filters-bar";
import { ImageGrid } from "@/components/search/image-grid";
import { Button } from "@/components/ui/button";
import { getImages } from "@/lib/api";

type ImagesPageProps = {
  searchParams: Promise<{
    search?: string;
    page?: string;
    orientation?: string;
  }>;
};

async function ImagesContent({ searchParams }: ImagesPageProps) {
  const params = await searchParams;

  const search = params.search?.trim() || "";
  const page = Number(params.page || "1");
  const orientation = params.orientation || "all";

  if (!search) {
    return (
      <main className="min-h-screen bg-[#050505] text-white">
        <HeroSearch />
      </main>
    );
  }

  const images = await getImages({
    search,
    page,
    orientation,
  });

  const prevPage = Math.max(page - 1, 1);
  const nextPage = page + 1;

  const createPageLink = (targetPage: number) =>
    `/images?search=${encodeURIComponent(search)}&page=${targetPage}&orientation=${encodeURIComponent(
      orientation,
    )}`;

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <section className="border-b border-white/10 bg-white/[0.02]">
        <section className="border-b border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-10">
            <HeroSearch initialValue={search} compact />
          </div>
        </section>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <FiltersBar
          search={search}
          page={page}
          orientation={orientation}
          totalHits={images.length}
        />

        <ImageGrid images={images} />

        <div className="mt-10 flex items-center justify-center gap-3">
          {page > 1 ? (
            <Link
              href={createPageLink(prevPage)}
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Previous</span>
            </Link>
          ) : (
            <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/35">
              <ChevronLeft className="h-4 w-4" />
              <span>Previous</span>
            </span>
          )}

          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            Page {page}
          </div>

          <Link
            href={createPageLink(nextPage)}
            className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10"
          >
            <span>Next</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default function ImagesPage(props: ImagesPageProps) {
  return (
    <Suspense
      fallback={<main className="min-h-screen bg-[#050505] text-white" />}
    >
      <ImagesContent {...props} />
    </Suspense>
  );
}
