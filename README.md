This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.jsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Features about this project
### 1. Lazy-loading and infinity scroll
image/page.jsx file:

a. State variables:

results: Stores the fetched image search results.
start: Keeps track of the starting index for fetching more images.
loading: Indicates whether the component is currently fetching images.
hasMore: Indicates whether there are more images to fetch.
b. useRef and useCallback:

observer: A ref to store the IntersectionObserver instance.
lastResultElementRef: A callback ref that triggers when the last image in the list is in the viewport. It disconnects the previous observer, if there is one, and creates a new observer to observe the new last image in the list.
c. useEffect:

Triggers when searchParams.searchTerm or start changes. Fetches images from the API and appends them to the results state variable. It also sets the hasMore state depending on whether more images are available.
d. Passing lastResultElementRef as a prop to ImageSearchResults.

ImageSearchResult.jsx file:

a. Receiving the lastResultElementRef prop.

b. Inside the results.items?.map() function, we conditionally render the last image element in the list with the lastResultElementRef ref attached to it.

How it works:

Initially, the component fetches the first set of images and renders them.
When the user scrolls down and the last image comes into the viewport, the lastResultElementRef callback ref is triggered.
The callback creates a new IntersectionObserver and starts observing the last image in the list. When the last image becomes visible, the observer increases the start state variable by 10, indicating that the next 10 images should be fetched.
The useEffect hook triggers when the start variable changes, fetching the next set of images and appending them to the results state variable. This process repeats as long as there are more images to fetch and the user keeps scrolling down.
By combining these different parts of the code, we achieve an infinite scrolling feature that fetches more images as the user scrolls down the page.
