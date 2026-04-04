import Link from "next/link";
import { Coffee } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 text-center text-sm text-white/50 md:flex-row md:text-left">
        {/* Left */}
        <div className="space-y-2">
          <p>
            © {new Date().getFullYear()}{" "}
            <a
              href="https://www.jaesmadeit.com/"
              target="_blank"
              rel="noreferrer"
              className="text-white/70 transition hover:text-red-500"
            >
              JAES Made It
            </a>
          </p>

          <p>
            Made with{" "}
            <a
              href="https://nextjs.org/"
              target="_blank"
              rel="noreferrer"
              className="text-white/70 transition hover:text-white"
            >
              NextJS
            </a>{" "}
            +{" "}
            <a
              href="https://pixabay.com/"
              target="_blank"
              rel="noreferrer"
              className="text-white/70 transition hover:text-white"
            >
              Pixabay
            </a>{" "}
            +{" "}
            <a
              href="https://github.com/jhonnierandrey/dasimaginare"
              target="_blank"
              rel="noreferrer"
              className="text-white/70 transition hover:text-white"
            >
              GitHub
            </a>
          </p>

          <p>
            API built with{" "}
            <a
              href="https://nestjs.com/"
              target="_blank"
              rel="noreferrer"
              className="text-white/70 transition hover:text-white"
            >
              NestJS
            </a>{" "}
            ·{" "}
            <a
              href="https://jmi-dasimaginare.onrender.com/"
              target="_blank"
              rel="noreferrer"
              className="text-white/70 transition hover:text-white"
            >
              API Status
            </a>
          </p>
        </div>

        {/* Right */}
        <div className="flex flex-col items-center gap-2 md:items-end">
          <Link
            href="https://www.jazr.me/"
            target="_blank"
            className="text-white/70 transition hover:text-red-500"
          >
            See more
          </Link>

          <a
            href="https://buymeacoffee.com/jhonnierandrey"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-white/70 transition hover:text-yellow-400"
          >
            <Coffee className="h-4 w-4" />
            Buy me a coffee
          </a>
        </div>
      </div>
    </footer>
  );
}
