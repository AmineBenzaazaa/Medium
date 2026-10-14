# Medium

A Medium-style blog front end built with Next.js, Tailwind CSS and the Sanity headless CMS. The home page shows a Medium-like header and hero banner. It fetches posts from Sanity at request time (`getServerSideProps`) and displays them in a grid with each post's main image, title and description.

The repository also contains the Sanity Studio (in `sanity/`) used to edit the content.

## Tech stack

- Next.js 13, React 18, TypeScript
- Tailwind CSS (with PostCSS and Autoprefixer)
- Sanity: `next-sanity` and `@sanity/image-url` in the front end, and a Sanity Studio v2 for content editing

## Project structure

```
pages/
  index.tsx          # Home page: hero and post grid, data loaded from Sanity
  _app.tsx
  api/hello.ts       # Default Next.js API route
components/Header.tsx
sanity.js            # Sanity client config and image URL helper
typings.d.ts         # Post type
styles/globals.css   # Tailwind entry
sanity/              # Sanity Studio
  sanity.json
  schemas/           # post, author, category, blockContent
```

## Getting started

### Front end

```bash
git clone https://github.com/AmineBenzaazaa/Medium.git
cd Medium
npm install
npm run dev        # http://localhost:3000
```

The other scripts are `npm run build` and `npm start`.

### Sanity Studio

```bash
cd sanity
npm install        # the studio ships a yarn.lock, so `yarn` also works
npm start          # sanity start
```

## Environment variables

The front end reads these, and falls back to the values in `sanity.js` if they are unset:

| Variable | Purpose |
| -------- | ------- |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity project ID |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity dataset (default `production`) |

## Status

Post cards link to `/post/<slug>`, but that page does not exist yet.
