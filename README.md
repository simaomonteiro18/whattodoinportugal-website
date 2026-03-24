# What to do in Portugal — Website

Official website for **What to do in Portugal**, a private tours and experiences company operating since 2017.

🌐 **Live site:** [whattodoin.pt](https://whattodoin.pt)

## About

What to do in Portugal offers private tours with expert local guides across Portugal — Sintra, Lisbon, Porto, Algarve and more. This website was built to modernise the company's online presence, improve SEO, and provide a better booking experience for international tourists.

## Tech Stack

- **HTML5, CSS3, JavaScript** — fully static, no frameworks
- **Netlify** — hosting, CDN, HTTPS, and redirects
- **FareHarbor** — booking system integration
- **Google Analytics** — traffic tracking with GDPR consent
- **CookieYes** — cookie consent management
- **Tripadvisor** — review widgets

## Features

- Responsive design (mobile, tablet, desktop)
- 14+ individual tour pages with itineraries, galleries, and booking
- Photo slideshow with lightbox and captions
- Sticky navigation with mobile hamburger menu
- Structured data (Schema.org) for rich Google results
- SEO optimised (meta tags, Open Graph, sitemap, robots.txt)
- 301 redirects from old Wix URLs
- GDPR compliant with Google Consent Mode v2
- Cookie & Privacy Policy page

## Project Structure
```
├── index.html                  # Homepage
├── styles.css                  # Main stylesheet
├── script.js                   # JavaScript (nav, slideshow, lightbox)
├── tour-detail.css             # Tour page specific styles
├── privacy-policy.html         # Cookie & Privacy Policy
├── sitemap.xml                 # SEO sitemap
├── robots.txt                  # Search engine crawling rules
├── _redirects                  # Netlify redirects (old Wix URLs)
├── assets/                     # Images, favicon, OG image
└── tours/                      # Individual tour pages
    ├── sintra-half-day.html
    ├── lisbon-half-day.html
    ├── fatima-half-day.html
    ├── sintra-coast-full-day.html
    ├── algarve-full-day.html
    ├── porto-full-day.html
    ├── lisbon-full-day.html
    ├── templar-knights-full-day.html
    ├── fatima-batalha-nazare-obidos.html
    ├── porto-transfer-3-stops.html
    ├── lisbon-sintra-shore.html
    ├── douro-valley-lisbon.html
    ├── southern-portugal-spain.html
    ├── setubal-azeitao-wine-tour.html
    └── customizable-tour.html
```

## Performance

| Metric | Mobile | Desktop |
|--------|--------|---------|
| Performance | 79 | 98 |
| Accessibility | 88 | 82 |
| Best Practices | 100 | 100 |
| SEO | 92 | 92 |

*Scores from Google PageSpeed Insights*

## Deployment

The site auto-deploys via GitHub → Netlify on every push to the `main` branch.

## Developer Notes

This was my first real web development project, built from scratch to redesign my dad's tourism business website. The previous site was hosted on Wix, and the goal was to create a faster, modern, and SEO-optimised alternative using only HTML, CSS, and JavaScript — no frameworks or CMS.

Throughout the project I learned about responsive design, SEO best practices, DNS configuration, Google Analytics integration, GDPR compliance, and deploying to production with Netlify.

Built by [Simão Monteiro](https://github.com/simaomonteiro18)

## License

© 2017–2026 Whattodoin.pt — All Rights Reserved
