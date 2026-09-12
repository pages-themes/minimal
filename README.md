# Venkatesh Beeraka — portfolio

A dark, green-and-blue portfolio for a Senior MLOps & DevOps Engineer, with seven presentation-style chapters and a growing focus on GPU infrastructure, inference engineering, and AIOps.

## Preview on your computer

1. Extract this ZIP.
2. Open `portfolio-master/index.html` in Chrome, Edge, Firefox, or Safari.
3. Scroll naturally, use the section links, or click the bottom previous/next controls. The left/right arrow keys also move between chapters when you are not editing text.
4. Select **View project** for project details. Press **Escape** or the close button to close a project.
5. Select **Pause motion** to stop decorative animation. System reduced-motion preferences are respected.

No npm install, API keys, build command, external fonts, or paid services are required. The website uses relative paths so it can run beneath `/portfolio/` on GitHub Pages.

## Replace your profile photo

**Replace `assets/img/profile.jpg` with your latest photograph, keeping that exact lowercase filename.**

- The supplied file is the photograph from your original repository, used as a temporary image.
- Use a real JPEG file (export PNG/HEIC images as JPEG; changing the extension alone is not a conversion).
- A portrait crop around 800 × 1000 pixels works well. Keep your face near the horizontal center and upper third. Aim for less than 1 MB.
- The website applies a monochrome treatment and a subtle green/blue overlay in CSS; your uploaded image itself is not altered.
- To adjust the crop, edit `.profile-photo` → `object-position: 50% 33%` in `assets/css/portfolio.css`.
- If the photo is missing or fails to load, the hero shows a VB monogram.
- The old `assets/img/venbee.jpeg` remains for compatibility. The new homepage uses `profile.jpg`.

## Replace your résumé

Replace `assets/docs/venkatesh-beeraka-resume.pdf`, retaining the name. The included PDF is the exact uploaded, masked résumé. Put your preferred public résumé here before publishing if you want recruiters to see different contact information. The website's contact buttons use LinkedIn and GitHub; it does not display the masked email address or phone number.

## Upload to a separate branch

1. Create a branch such as `portfolio-2026` from your existing repository branch.
2. Copy/upload the **contents of `portfolio-master/` into the repository root** on that branch. Do not upload the ZIP itself or place another `portfolio-master/` folder inside the repository.
3. Include `index.html`, `assets/`, `.nojekyll`, the updated `.github/workflows/ci.yaml`, `script/check_portfolio.py`, `README.md`, `_config.yml`, and `index.md`. Commit the changes. If your file picker hides dotfiles, use a local Git client to include `.nojekyll` and `.github`, or create/update those files explicitly on GitHub.
4. You can review locally and leave the current publishing branch unchanged while evaluating the design.
5. To publish this branch, configure the repository's GitHub Pages publishing source to use the new branch and its root directory. Selecting it changes the existing live site's source; a second branch alone does not create a separate live preview URL.
6. Confirm the page, profile photo, project dialogs, and résumé download in your browser after deployment. Use a hard refresh if old assets remain cached.

This package does **not** publish or push anything. Its CI workflow validates the static files; it does not deploy them. The original site's Jekyll files are retained for compatibility, but the new `index.html` and `.nojekyll` are the static entry point. GitHub's publishing-source documentation is available at https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site .

## Where to edit content

| File | Purpose |
| --- | --- |
| `index.html` | Text, links, work history, skills, project overview templates |
| `assets/css/portfolio.css` | Colors, layout, animations, mobile layout, print styles |
| `assets/js/portfolio.js` | Chapter navigation, mobile menu, project dialogs, motion controls |
| `assets/img/profile.jpg` | Main profile photo — replace this file |
| `assets/img/favicon.svg` | Green/blue browser-tab icon |
| `assets/docs/venkatesh-beeraka-resume.pdf` | Downloadable résumé — replace this file |

The color variables are at the top of the stylesheet: `--green`, `--blue`, `--bg`, `--text`, and `--muted`.

Role titles, dates, certifications, and project counts follow the uploaded résumé. Kubernetes/AKS is shown as working knowledge and AWS as fundamentals. GPU engineering, inference engineering, and AIOps are explicitly presented as learning directions. The project summaries describe enterprise experience; they do not imply that client source code is public.

## Validation

Run `node --check assets/js/portfolio.js` and `python3 script/check_portfolio.py` from the repository root. These check JavaScript syntax, local assets, internal links, and static entry files. They do not replace browser testing.

Before publishing, review at desktop and mobile widths, navigate all seven chapters, open all three projects, use Escape and the mobile menu, pause motion, and open the résumé. Automated visual/browser testing could not be completed in the creation environment because its browser policy blocked local pages.

## Original assets

The original theme files, fonts, and LICENSE are retained from the supplied repository. The new homepage does not load the old Jekyll stylesheet or scripts.
