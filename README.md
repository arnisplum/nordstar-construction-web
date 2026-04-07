Nordstar Construction — premium one-page marketing site built with [Next.js](https://nextjs.org), Tailwind CSS, and Motion. See `PROJECT.md` for structure and content notes.

## Push to GitHub

`origin` is set to **`https://github.com/arnisplum/nordstar-construction-web.git`** (change it with `git remote set-url origin …` if you used another repo name).

1. Create the repo on GitHub: [github.com/new](https://github.com/new) → owner **arnisplum** → name **`nordstar-construction-web`** → **empty** (no README / .gitignore / license).
2. In this folder, push (sign in when Git asks — browser or Personal Access Token):

```bash
git push -u origin main
```

After the first push, use `git pull` / `git push` from work or home. Then connect the repo in Vercel.

This repo uses a local Git name/email for commits. To use your real address: `git config user.email "you@example.com"` and `git config user.name "Your Name"`, then `git commit --amend --reset-author --no-edit` before pushing (or set `--global` for all projects).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) for DM Sans and Instrument Serif.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
