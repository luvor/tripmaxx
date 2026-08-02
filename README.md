# Tripmaxx — project site

Public pages for the Tripmaxx iOS app, served at `https://tripmaxx.chynybekov.com/`
(Netlify, deployed from this repo on push to `main`).

| Page | URL |
|---|---|
| Landing | https://tripmaxx.chynybekov.com/ |
| Install landing (QR target) | https://tripmaxx.chynybekov.com/use/ |
| Privacy (EN) | https://tripmaxx.chynybekov.com/privacy.html |
| Privacy (RU) | https://tripmaxx.chynybekov.com/privacy.ru.html |
| Credits & Licenses | https://tripmaxx.chynybekov.com/licenses.html |
| AASA | https://tripmaxx.chynybekov.com/.well-known/apple-app-site-association |

Own subdomain = own domain root, so universal links live here now: Apple fetches
AASA only from the root, which a GitHub project page could not serve.

The old `luvor.github.io` keeps serving AASA and redirects `/use/`,
`/privacy.html`, `/privacy.ru.html`, `/licenses.html` here — builds 1.0.x have the
old host baked into their QR and entitlement, and that must keep working.

Must stay in sync (single source of truth: `tracy` repo, `Tracy/DesignSystem.swift`):

- `Brand.host` → `tripmaxx.chynybekov.com`
- Associated Domains entitlement → `applinks:tripmaxx.chynybekov.com` **and**
  `applinks:luvor.github.io`
- `appIDs` in AASA → `V45669B929.com.luvor.tracy`

## Verify after deploy

```
curl -sI https://tripmaxx.chynybekov.com/.well-known/apple-app-site-association
```
Must be `200`, `content-type: application/json` (set in `_headers`), no redirect,
plain JSON without a BOM. If iOS fails to associate, check Apple's CDN:
`https://app-site-association.cdn-apple.com/a/v1/tripmaxx.chynybekov.com`.
