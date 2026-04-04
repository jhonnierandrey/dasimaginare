import { PixabayImage } from "@/types/image";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

type GetImagesParams = {
  search: string;
  page?: number;
  orientation?: string;
};

export async function getImages({
  search,
  page = 1,
  orientation = "all",
}: GetImagesParams): Promise<PixabayImage[]> {
  if (!API_URL) {
    throw new Error("NEXT_PUBLIC_API_URL is not configured.");
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);

  try {
    const query = new URLSearchParams({
      search,
      page: String(page),
      orientation,
    });

    const response = await fetch(`${API_URL}/api/images?${query.toString()}`, {
      cache: "no-store",
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch images. Status: ${response.status}`);
    }

    const raw = await response.json();
    return Array.isArray(raw) ? raw : [];
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      throw new Error("The request timed out. Please try again.");
    }

    throw error;
  } finally {
    clearTimeout(timeout);
  }
}
