# Harbor Buddy Tugboat

Demo ecommerce site for Shoreline Ventures LLC showcasing the Harbor Buddy Tugboat — a children's bath toy made from 100% recycled ocean-bound plastic.

## Tech Stack

- Vanilla HTML, CSS, JavaScript — no frameworks, no build step
- CSS custom properties for design tokens
- ES modules for JavaScript
- Deployed via GitHub Pages from `main` branch

## Pages

- **index.html** — Product landing page with image gallery, color variant swatches, FAQ accordion, and contact form
- **order.html** — Stripe-style checkout page with order summary and payment form

## Running Locally

Open `index.html` in a browser, or serve with any static file server:

```sh
npx serve .
```

## Deployment

Pushes to `main` automatically deploy to GitHub Pages via the workflow in `.github/workflows/deploy.yml`.
