# Tripmaxx — project site

Public pages for the Tripmaxx iOS app, served at `https://luvor.github.io/tripmaxx/`
(GitHub project page).

| Page | URL |
|---|---|
| Landing | https://luvor.github.io/tripmaxx/ |
| Privacy (EN) | https://luvor.github.io/tripmaxx/privacy.html |
| Privacy (RU) | https://luvor.github.io/tripmaxx/privacy.ru.html |
| Credits & Licenses | https://luvor.github.io/tripmaxx/licenses.html |

What stays in the user-site repo `luvor.github.io` (domain root — cannot move):

- `/.well-known/apple-app-site-association` — Apple only fetches AASA from the
  domain root, a project-page subpath cannot serve it.
- `/use/` — universal-link landing baked into the signed app build (QR in every
  exported video).
- `/privacy.html`, `/privacy.ru.html`, `/licenses.html` — meta-refresh redirects
  here, because the shipped build links to the root paths.

Source of truth for the app side: `tracy` repo, `Tracy/DesignSystem.swift` (`Brand`).
