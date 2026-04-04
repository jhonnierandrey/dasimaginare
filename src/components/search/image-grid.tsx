"use client";

import { useState } from "react";
import { PixabayImage } from "@/types/image";
import { ImageCard } from "./image-card";
import { ImagePreviewDialog } from "./image-preview-dialog";

type ImageGridProps = {
  images: PixabayImage[];
};

export function ImageGrid({ images }: ImageGridProps) {
  const [selectedImage, setSelectedImage] = useState<PixabayImage | null>(null);
  const [open, setOpen] = useState(false);

  function handleOpen(image: PixabayImage) {
    setSelectedImage(image);
    setOpen(true);
  }

  if (!images.length) {
    return (
      <div className="rounded-3xl border border-dashed border-white/10 bg-white/[0.03] px-6 py-16 text-center">
        <h2 className="text-lg font-medium text-white">No images found</h2>
        <p className="mt-2 text-sm text-white/55">
          Try a different keyword or adjust the orientation filter.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {images.map((image) => (
          <ImageCard
            key={image.id}
            image={image}
            onPreview={() => handleOpen(image)}
          />
        ))}
      </div>

      <ImagePreviewDialog
        image={selectedImage}
        open={open}
        onOpenChange={setOpen}
      />
    </>
  );
}
