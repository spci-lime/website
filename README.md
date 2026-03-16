# Siva Parvathi Chemical Industries Website

Static single-page website for **Siva Parvathi Chemical Industries**, designed for Netlify deployment and easy future edits. The `splime` name is treated as a domain/deployment label, not on-page brand copy.

## Files

- `index.html`: Main homepage
- `styles.css`: Site styling
- `script.js`: Mobile navigation and inquiry helpers
- `privacy-policy.html`: Privacy policy page
- `terms.html`: Terms and conditions page
- `content-reference.md`: Central content and update guide
- `PROJECT_AGENT_NOTES.md`: Handoff context for future agents
- `assets/`: Favicon and placeholder SVG visuals
- `robots.txt`: Search engine instructions
- `sitemap.xml`: Sitemap placeholder for the site

## Preview Locally

1. Open `/Users/hemachandrakolisetty/Documents/Playground/index.html` directly in a browser for a quick preview.
2. For a cleaner local preview, run:

```bash
python3 -m http.server 8000
```

3. Visit `http://localhost:8000`.

## Update Content

1. Open `/Users/hemachandrakolisetty/Documents/Playground/content-reference.md`.
2. Update business copy, contact details, CTAs, SEO notes, or replacement instructions there first.
3. Mirror those edits into `index.html`, `privacy-policy.html`, and `terms.html` as needed.
4. Product cards and logo now use files from `/Users/hemachandrakolisetty/Documents/Playground/assets/Images/`.
5. Replace those image files directly, or update the paths in `index.html` if you rename them.

## Replace Images

- Current visuals are safe placeholders built as original SVGs.
- To replace them:
  1. Prepare optimized images with the same approximate aspect ratio.
  2. Save them in `/Users/hemachandrakolisetty/Documents/Playground/assets/`.
  3. Either reuse the current filename or update the `src` in `index.html`.
- Recommended SEO-style filenames:
  - `quick-lime-manufacturer-india.jpg`
  - `hydrated-lime-supplier-india.jpg`
  - `lime-manufacturing-plant.jpg`

## Netlify Deployment

1. Create a new Git repository from this folder if needed.
2. Push the project to GitHub, GitLab, or Bitbucket.
3. In Netlify, choose **Add new site** -> **Import an existing project**.
4. Connect your repository and keep the defaults:
   - Build command: leave blank
   - Publish directory: `.`
5. Deploy the site.
6. After the first deploy, open **Forms** in Netlify to verify that the `product-inquiry` form is detected.
7. Update the canonical URL in `index.html` and `sitemap.xml` once you know the final Netlify subdomain or custom domain.

## Netlify Form Notes

- The inquiry form already includes Netlify form attributes.
- No backend is required for basic submissions.
- Once deployed, submit one test inquiry from the live site so Netlify fully registers the form.

## Future Improvements

- Add a real Google Maps embed once the map URL is available.
- Replace placeholder visuals with actual factory, product, and packaging photos.
- Add full Telugu or Hindi versions if multilingual content becomes a priority.
- Expand into dedicated product pages if SEO depth is needed later.
