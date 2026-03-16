# Siva Parvathi Chemical Industries Agent Notes

This project is the **GitHub Pages** variant of the Siva Parvathi Chemical Industries website.

## Current Build Decisions

- Stack: pure HTML, CSS, JS
- Hosting target: GitHub Pages
- Form handling: Google Forms via client-side POST
- Structure: single-page homepage plus legal pages
- Visual strategy: modern B2B with real logo/product/factory images
- Branding: use `Siva Parvathi Chemical Industries` on the website

## Important Business Constraints

- Do not publish prices.
- Do not claim certifications.
- Keep copy professional, concise, and trust-oriented.
- Product requirements are specification-led, so avoid hardcoding deeper technical tables unless the business later provides them.

## Common Next Edits

- Update canonical, OG, robots, and sitemap URLs for the final GitHub Pages domain if needed.
- Replace or refine assets in `assets/Images` as needed.
- Add a Google Maps embed once location sharing is ready.
- Add product-specific landing pages only if SEO expansion is needed.

## Places to Edit First

- Update content in `/Users/hemachandrakolisetty/Documents/SPCI_Github/content-reference.md`
- Update layout/content in `/Users/hemachandrakolisetty/Documents/SPCI_Github/index.html`
- Update styles in `/Users/hemachandrakolisetty/Documents/SPCI_Github/styles.css`
- Update Google Forms mapping in `/Users/hemachandrakolisetty/Documents/SPCI_Github/script.js` if the form changes

## Form Reminder

The inquiry form posts to Google Forms and shows a custom success message on the page. If the Google Form fields are edited or recreated, the `entry.*` IDs in `script.js` must be updated.
