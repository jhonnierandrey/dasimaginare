"use client";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ImagesErrorPage({ error, reset }: ErrorPageProps) {
  console.error(error);

  return (
    <main className="min-h-screen bg-[#050505] px-6 py-16 text-white">
      <div className="mx-auto flex max-w-2xl flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur">
        <div className="mb-4 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-xs tracking-wide text-red-300">
          Something went wrong
        </div>

        <h1 className="text-2xl font-semibold text-white sm:text-3xl">
          We couldn’t load the images right now.
        </h1>

        <p className="mt-3 max-w-lg text-sm leading-6 text-white/65 sm:text-base">
          The API may be temporarily unavailable, too slow to respond, or there
          may be a network issue. Please try again in a moment.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => reset()}
            className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90"
          >
            Try again
          </button>

          <a
            href="/"
            className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Go back home
          </a>
        </div>
      </div>
    </main>
  );
}
