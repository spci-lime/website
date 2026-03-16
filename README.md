# Siva Parvathi Chemical Industries Website

Static single-page website for **Siva Parvathi Chemical Industries**, prepared for **GitHub Pages** hosting and wired to submit inquiries to **Google Forms**.

## Files

- `index.html`: Main homepage
- `styles.css`: Site styling
- `script.js`: Mobile navigation, inquiry helpers, and Google Forms submission logic
- `privacy-policy.html`: Privacy policy page
- `terms.html`: Terms and conditions page
- `content-reference.md`: Central content and update guide
- `PROJECT_AGENT_NOTES.md`: Handoff context for future agents
- `assets/`: Images, logo, favicon, and placeholder SVG visuals
- `robots.txt`: Search engine instructions
- `sitemap.xml`: Sitemap for the site

## Preview Locally

1. Open `/Users/hemachandrakolisetty/Documents/SPCI_Github/index.html` directly in a browser for a quick preview.
2. For a cleaner local preview, run:

```bash
python3 -m http.server 8000
```

3. Visit `http://localhost:8000`.

## Update Content

1. Open `/Users/hemachandrakolisetty/Documents/SPCI_Github/content-reference.md`.
2. Update business copy, contact details, CTAs, SEO notes, or replacement instructions there first.
3. Mirror those edits into `index.html`, `privacy-policy.html`, and `terms.html` as needed.
4. Product cards and logo use files from `/Users/hemachandrakolisetty/Documents/SPCI_Github/assets/Images/`.
5. Replace those image files directly, or update the paths in `index.html` if you rename them.

## Replace Images

- Product and logo assets currently come from `assets/Images/`.
- To replace them:
  1. Prepare optimized images with similar aspect ratios.
  2. Save them in `/Users/hemachandrakolisetty/Documents/SPCI_Github/assets/Images/`.
  3. Either reuse the current filename or update the `src` in `index.html`.

## GitHub Pages Deployment

1. Push this project to a GitHub repository.
2. In GitHub, open the repository and go to `Settings` -> `Pages`.
3. Under `Build and deployment`, choose:
   - `Source`: `Deploy from a branch`
   - `Branch`: `main`
   - `Folder`: `/ (root)`
4. Save the settings.
5. Wait a few minutes for GitHub Pages to publish.
6. Your Pages URL will look like:

   `https://<github-username>.github.io/<repo-name>/`

7. Update the canonical URL, Open Graph URL, `robots.txt`, and `sitemap.xml` if the final GitHub Pages URL differs from the current value.

## Google Forms Inquiry Setup

- The inquiry form submits to Google Forms using JavaScript.
- Users stay on the site and see a custom success message after submission.
- Current Google Form target:

  `https://docs.google.com/forms/d/e/1FAIpQLScEOwLZd-RRgDhp-xmjgIERLFeT_7V8lqEHOsmB_3xXcuZYtw/formResponse`

- Field mapping is handled in `script.js`.
- If the Google Form changes, update the `GOOGLE_FORM_URL` and entry IDs in `script.js`.

## Future Improvements

- Add a real Google Maps embed once the map URL is available.
- Replace or refine product and factory images as needed.
- Add multilingual support if required later.
- Expand into product-specific landing pages if SEO depth is needed.
