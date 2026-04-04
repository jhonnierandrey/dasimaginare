export default function LoadingImagesPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <section className="border-b border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="h-16 w-full animate-pulse rounded-3xl border border-white/10 bg-white/5" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8 flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <div className="h-4 w-24 animate-pulse rounded bg-white/10" />
            <div className="h-7 w-48 animate-pulse rounded bg-white/10" />
            <div className="h-4 w-36 animate-pulse rounded bg-white/10" />
          </div>

          <div className="h-10 w-[180px] animate-pulse rounded-xl bg-white/10" />
        </div>

        <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
          <span>Searching Imaginäre...</span>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5"
            >
              <div className="aspect-[4/3] animate-pulse bg-white/10" />
              <div className="space-y-3 p-4">
                <div className="h-4 w-3/4 animate-pulse rounded bg-white/10" />
                <div className="h-3 w-1/3 animate-pulse rounded bg-white/10" />
              </div>
              <div className="grid grid-cols-4 gap-2 border-t border-white/10 px-4 py-3">
                {Array.from({ length: 4 }).map((_, statIndex) => (
                  <div
                    key={statIndex}
                    className="h-6 animate-pulse rounded bg-white/10"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
