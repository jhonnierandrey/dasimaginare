"use client";

import Image from "next/image";
import {
  ExternalLink,
  Eye,
  Download,
  Heart,
  MessageCircle,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PixabayImage } from "@/types/image";

type ImagePreviewDialogProps = {
  image: PixabayImage | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function ImagePreviewDialog({
  image,
  open,
  onOpenChange,
}: ImagePreviewDialogProps) {
  if (!image) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-hidden border-white/10 bg-[#0a0a0a] p-0 text-white sm:max-w-5xl">
        <div className="grid max-h-[90vh] grid-cols-1 overflow-hidden md:grid-cols-[1.4fr_0.9fr]">
          <div className="relative min-h-[320px] bg-black md:min-h-[650px]">
            <Image
              src={
                image.largeImageURL || image.webformatURL || image.previewURL
              }
              alt={image.tags || "Pixabay image"}
              fill
              sizes="(max-width: 768px) 100vw, 70vw"
              className="object-contain"
              priority
            />
          </div>

          <div className="flex h-full flex-col border-t border-white/10 md:border-l md:border-t-0">
            <DialogHeader className="border-b border-white/10 px-6 py-5 text-left">
              <DialogTitle className="line-clamp-2 text-lg font-semibold text-white">
                {image.name || image.tags || "Image Preview"}
              </DialogTitle>
            </DialogHeader>

            <div className="flex-1 space-y-6 overflow-y-auto px-6 py-5">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                  Tags
                </p>
                <p className="mt-2 text-sm leading-6 text-white/75">
                  {image.tags || "No tags available"}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                  Author
                </p>
                <div className="mt-2 flex items-center gap-3">
                  {image.userImageURL ? (
                    <Image
                      src={image.userImageURL}
                      alt={image.user || "Author"}
                      width={40}
                      height={40}
                      className="rounded-full border border-white/10 object-cover"
                    />
                  ) : (
                    <div className="h-10 w-10 rounded-full border border-white/10 bg-white/5" />
                  )}

                  <div>
                    <p className="text-sm font-medium text-white">
                      {image.user || "Unknown author"}
                    </p>
                    {image.userURL && (
                      <a
                        href={image.userURL}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs text-white/50 transition hover:text-white/80"
                      >
                        View Pixabay profile
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                  Image details
                </p>
                <div className="mt-3 grid grid-cols-2 gap-3 text-sm text-white/70">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <p className="text-xs text-white/40">Dimensions</p>
                    <p className="mt-1">
                      {image.imageWidth ?? 0} × {image.imageHeight ?? 0}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <p className="text-xs text-white/40">Type</p>
                    <p className="mt-1 capitalize">{image.type || "photo"}</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                  Stats
                </p>
                <div className="mt-3 grid grid-cols-2 gap-3 text-sm text-white/70">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <div className="flex items-center gap-2">
                      <Eye className="h-4 w-4" />
                      <span>{(image.views ?? 0).toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <div className="flex items-center gap-2">
                      <Download className="h-4 w-4" />
                      <span>{(image.downloads ?? 0).toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <div className="flex items-center gap-2">
                      <Heart className="h-4 w-4" />
                      <span>{(image.likes ?? 0).toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <div className="flex items-center gap-2">
                      <MessageCircle className="h-4 w-4" />
                      <span>{(image.comments ?? 0).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 border-t border-white/10 px-6 py-5 sm:flex-row">
              <a
                href={image.pageURL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-medium text-black transition hover:bg-white/90"
              >
                Open in Pixabay
                <ExternalLink className="h-4 w-4" />
              </a>

              <a
                href={image.largeImageURL || image.webformatURL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Open image
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
