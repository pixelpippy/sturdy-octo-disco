# Getting Started with VitePress

[VitePress](https://vitepress.dev/) is a modern static site generator that makes it easy to build documentation sites and blogs. In this post, I'll walk through the basics of getting a VitePress site up and running.

## Installation

First, create a new project and install VitePress:

```bash
npm init -y
npm install -D vitepress
```

## Project Structure

A typical VitePress project looks like this:

```
.
├── .vitepress/
│   └── config.js      # VitePress configuration
├── index.md           # Home page
├── posts/
│   ├── index.md       # Posts listing
│   └── my-post.md     # A blog post
└── package.json
```

## Configuration

Create `.vitepress/config.js` to configure your site:

```js
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'My Blog',
  description: 'A personal blog built with VitePress',
})
```

## Writing Posts

Posts are just Markdown files. Create a new `.md` file in your `posts/` directory and start writing!

## Deploying to GitHub Pages

To deploy to GitHub Pages, add a GitHub Actions workflow that builds your site and pushes the output to the `gh-pages` branch (or configure GitHub Pages to deploy from the `gh-pages` branch via Actions).

Set the `base` option in your config to match your repository name:

```js
export default defineConfig({
  base: '/your-repo-name/',
})
```

Happy blogging!
