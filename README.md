# Imaginäre

A modern image discovery experience built with **Next.js**, powered by a refreshed **NestJS API** and **Pixabay** search results.

This frontend is a complete UI re-imagination of the original Dasimaginare project, rebuilt with a cleaner visual system, a more premium browsing experience, and a modern full-stack architecture.

---

## ✨ Features

- 🔎 Search free images through a modern interface
- 🖼️ Responsive image grid with rich preview modal
- 🎛️ Orientation filtering
- 📄 Pagination support
- ⏳ Route-level loading state while results are fetched
- ⚠️ Friendly error state when the API fails or times out
- 🌌 Dynamic landing background using Lorem Picsum
- 📱 Mobile-friendly layout
- 🎨 Built with a premium dark UI style

---

## 🧱 Tech Stack

- **Framework:** Next.js
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Image Source:** Pixabay
- **Background Images:** Lorem Picsum

---

## 🚀 Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/jhonnierandrey/imaginare-web.git
cd imaginare-web
npm install
```

---

## ⚙️ Environment Variables

Create a `.env.local` file in the root of the project:

```env
NEXT_PUBLIC_API_URL=http://localhost:4000
```

### Variable Reference

| Variable              | Description                                                   |
| --------------------- | ------------------------------------------------------------- |
| `NEXT_PUBLIC_API_URL` | Base URL of the NestJS API used to fetch image search results |

---

## ▶️ Run Locally

```bash
npm run dev
```

Open the app at:

```bash
http://localhost:3000
```

---

## 🔌 API Dependency

This frontend expects the backend API to be running and accessible through `NEXT_PUBLIC_API_URL`.

Example request used by the UI:

```http
GET /api/images?search=space&page=1&orientation=all
```

Expected current API response shape:

```json
[
  {
    "id": 67718,
    "pageURL": "https://pixabay.com/photos/satellite-spacecraft-space-67718/",
    "type": "photo",
    "tags": "satellite, spacecraft, space",
    "previewURL": "https://cdn.pixabay.com/photo/2012/11/28/11/25/satellite-67718_150.jpg",
    "webformatURL": "https://pixabay.com/get/example_640.jpg",
    "largeImageURL": "https://pixabay.com/get/example_1280.jpg",
    "views": 248355,
    "downloads": 160900,
    "likes": 345,
    "comments": 65,
    "user": "WikiImages"
  }
]
```

---

## 🗂️ Project Structure

```bash
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── images/
│       ├── page.tsx
│       ├── loading.tsx
│       └── error.tsx
├── components/
│   ├── layout/
│   │   ├── navbar.tsx
│   │   └── footer.tsx
│   └── search/
│       ├── hero-search.tsx
│       ├── filters-bar.tsx
│       ├── image-card.tsx
│       ├── image-grid.tsx
│       └── image-preview-dialog.tsx
├── lib/
│   ├── api.ts
│   └── utils.ts
└── types/
    └── image.ts
```

---

## 🎨 UI Notes

This version of **Imaginäre** was intentionally rebuilt as a fresh frontend rather than a 1:1 migration from the original React app.

### Key design goals

- cleaner and more modern layout
- stronger visual identity
- premium dark theme
- improved mobile experience
- more polished interactions
- better perceived performance with loading states

---

## 🖼️ Credits

- Search results and image data are powered by [Pixabay](https://pixabay.com/)
- Landing page background images are provided by [Lorem Picsum](https://picsum.photos/)

---

## 🛠️ Future Improvements

- masonry layout
- category filters
- infinite scrolling
- favorites / saved images
- live API status badge
- SEO metadata, sitemap, and social preview tags

---

## 👨‍💻 Author

Developed by [JAES Made It](https://www.jaesmadeit.com/)

---

## 📄 License

This project is open-source and available under the MIT License.
