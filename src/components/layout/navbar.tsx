import Link from "next/link";
import { Images } from "lucide-react";
import Image from "next/image";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-white transition hover:text-white/80"
        >
          <Image
            src="/logo.png"
            alt="Imaginäre logo"
            width={24}
            height={24}
            className="object-contain"
          />
          <span>Imaginäre</span>
        </Link>

        <nav className="flex items-center gap-3 text-sm text-white/70">
          <Link
            href="/"
            className="rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-white"
          >
            Home
          </Link>

          <a
            href="https://jmi-dasimaginare.onrender.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-white"
          >
            API
          </a>

          <a
            href="https://github.com/jhonnierandrey/dasimaginare"
            target="_blank"
            rel="noreferrer"
            className="rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-white"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
