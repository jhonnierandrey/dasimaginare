"use client";

import Image from "next/image";
import { ExternalLink, Heart, Download, Eye, Expand } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PixabayImage } from "@/types/image";

type ImageCardProps = {
  image: PixabayImage;
  onPreview: () => void;
};

export function ImageCard({ image, onPreview }: ImageCardProps) {
  return (
    <Card className="group overflow-hidden rounded-3xl border-white/10 bg-white/5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07] hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]">
      <CardContent className="p-0">
        <button
          type="button"
          onClick={onPreview}
          className="relative block aspect-[4/3] w-full overflow-hidden text-left"
        >
          <Image
            src={image.webformatURL || image.previewURL}
            alt={image.tags || "Pixabay image"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-90" />

          <div className="absolute right-3 top-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs text-white/85 opacity-0 backdrop-blur transition group-hover:opacity-100">
            <Expand className="h-3.5 w-3.5" />
            Preview
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-4">
            <p className="line-clamp-2 text-sm font-medium text-white">
              {image.tags}
            </p>

            <div className="mt-3 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="truncate text-xs text-white/60">
                  by {image.user || "Unknown author"}
                </p>
              </div>

              <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80">
                View
                <Expand className="h-3.5 w-3.5" />
              </span>
            </div>
          </div>
        </button>

        <div className="grid grid-cols-4 gap-2 border-t border-white/10 px-4 py-3 text-xs text-white/55">
          <div className="flex items-center gap-2">
            <Eye className="h-3.5 w-3.5" />
            <span>{image.views ?? 0}</span>
          </div>
          <div className="flex items-center gap-2">
            <Download className="h-3.5 w-3.5" />
            <span>{image.downloads ?? 0}</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="h-3.5 w-3.5" />
            <span>{image.likes ?? 0}</span>
          </div>
          <div className="flex items-center justify-end">
            <a
              href={image.pageURL}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80 transition hover:bg-white/15"
            >
              Open
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
