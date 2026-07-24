# QuoteSnap — Instant Quote Calculators for Local Services

Stop losing leads to slow quotes. QuoteSnap is a suite of embeddable, $0 upkeep calculators for auto detailers and pressure washers — Residential + Commercial.

Live Demo: `https://YOURUSERNAME.github.io/quotesnap-suite/`

![QuoteSnap Logo](https://github.com/YOURUSERNAME/quotesnap-suite/blob/main/quotesnap_logo_transparent.png?raw=true)

## What’s Inside

### 1. 🚗 Midnight Shine — Auto Detailing (`detailing.html`)
Premium jet-black / lime studio theme.
- Vehicle types: Sedan, SUV, Truck, Van
- Service levels: Basic, Full Detail, Paint Correction
- Add-ons: Ceramic, Interior Deep, Pet Hair, etc.
- Live price range, lead capture, admin pricing editor

### 2. 💦 Aqua Blast Pro — Pressure Washing (`washing.html`)
Residential + **Commercial PRO** — charge 3x more.
- **Residential:** House Exterior (sqft), Driveway, Deck/Patio, Roof Wash (flat), Gutters
- **Commercial:** Storefront Plaza, Office Building, Warehouse (up to 10k sqft), Parking Lot/Garage, Dumpster Pad / Grease, Fleet Vehicles (per unit), Sidewalk (linear ft)
- Condition multiplier: Light / Moderate / Heavy
- Add-ons: 2-Story, Degreasing, Gum Removal, After-Hours, Heavy Mold
- Frequency: One-Time | Monthly 15% off | Bi-Weekly 20% off → Recurring revenue
- Shows `Monthly: $X/mo + $Y first deep clean`

Both calculators are **single-file HTML** — no backend, no database, no monthly server cost.

## How To Use (30 seconds)

### Option A: Embed in Any Website (Wix, Squarespace, WordPress, GoHighLevel)
Copy this iframe:

```html
<!-- Detailing -->
<iframe src="https://YOURUSERNAME.github.io/quotesnap-suite/detailing.html" width="100%" height="900" style="border:0;border-radius:28px;overflow:hidden"></iframe>

<!-- Wash Pro -->
<iframe src="https://YOURUSERNAME.github.io/quotesnap-suite/washing.html" width="100%" height="950" style="border:0;border-radius:28px;overflow:hidden"></iframe>
```

### Option B: Direct Link
Send clients directly to `detailing.html` or `washing.html` — works like a landing page.

## Admin & Leads (No Code)

1. Open any calculator
2. Click **Admin Setup** (top right)
3. Set your Business Name, Phone, Email
4. Edit your rates live — changes save to browser
5. Copy the auto-generated embed code
6. View **Recent Leads** table — saved in localStorage. Export or connect to Zapier/Make via webhook (coming soon).

Leads are stored in:
- `qs_detail_leads` (detailing)
- `qs_pro_leads` (wash pro)

## File Structure

```
/
├── index.html        # Landing page for the suite (this repo's homepage)
├── detailing.html    # Detailing calculator - single file with logo baked in
├── washing.html      # Wash Pro commercial + residential - single file
├── README.md         # This file
└── logos/
    ├── quotesnap_logo_transparent.png (black master)
    ├── quotesnap_logo_white_transparent.png (for dark bg)
    └── quotesnap_logo_blue_transparent.png (for wash theme)
```

## Hosting (GitHub Pages - Free)

This repo is configured for GitHub Pages:
1. Go to Settings → Pages
2. Source: Deploy from a branch
3. Branch: main / root
4. Save — you get `https://YOURUSERNAME.github.io/quotesnap-suite/`

## Tech

- React (via CDN, no build step)
- Tailwind CSS
- 100% client-side, localStorage for leads/admin
- No npm, no backend, embeddable anywhere

## Pricing Model (For Resellers)

Use this to sell to local shops:

- **Starter $29/mo** — 1 site, residential only
- **Pro $49/mo** — 3 sites + Commercial PRO mode (most popular)
- **Agency $99/mo** — Unlimited + White label

Pitch: "One commercial parking lot job = $1,200. This calculator closes it while you sleep."

## Roadmap

- [ ] SMS notification via Twilio on lead
- [ ] Stripe checkout link in success modal
- [ ] Zapier webhook for GoHighLevel
- [ ] Photo upload for damage assessment
- [ ] Lawn care / Junk removal calculators

## License

Proprietary — All rights reserved. No license granted for commercial resale without permission. Contact for white-label rights.

---

Built by M3L6N9N Society — Folcroft, PA
Questions? Open an issue or DM @mfn_geez
