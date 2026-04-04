"use client";

import { useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type FiltersBarProps = {
  search: string;
  page: number;
  orientation: string;
  totalHits?: number;
};

export function FiltersBar({
  search,
  page,
  orientation,
  totalHits,
}: FiltersBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  function updateOrientation(value: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("orientation", value);
    params.set("page", "1");
    router.push(`/images?${params.toString()}`);
  }

  return (
    <div className="mb-8 flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-sm text-white/50">Results for</p>
        <h2 className="text-xl font-semibold text-white">“{search}”</h2>
        <p className="mt-1 text-sm text-white/45">
          {(totalHits ?? 0).toLocaleString()} results on this page · Page {page}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-sm text-white/55">Orientation</span>
        <Select value={orientation} onValueChange={updateOrientation}>
          <SelectTrigger className="w-[180px] border-white/10 bg-white/5 text-white">
            <SelectValue placeholder="Orientation" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="horizontal">Horizontal</SelectItem>
            <SelectItem value="vertical">Vertical</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
