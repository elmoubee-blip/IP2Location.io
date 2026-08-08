# GeoLens — IP2Location Smart Geolocator

A polished web dashboard for the IP2Location Programming Contest 2026.

## Features
- IPv4 and IPv6 lookup
- Auto-detect current public IP when the input is blank
- Country, region, city and timezone
- ISP, ASN, domain and usage type
- Proxy detection when returned by the API
- Map link using returned coordinates
- Responsive mobile-friendly interface
- No lookup history stored by the application

## Technology
- Node.js
- Express
- Vanilla HTML/CSS/JavaScript
- IP2Location.io REST API

IP2Location.io documents a keyless endpoint for limited usage: `https://api.ip2location.io/?ip=8.8.8.8`. For higher limits, an API key can be added later.

## Run locally

1. Install Node.js 18+.
2. Open a terminal in this folder.
3. Run:
   `npm install`
4. Start:
   `npm start`
5. Open:
   `http://localhost:3000`

## API key
The current project intentionally uses the keyless IP2Location.io endpoint so the source code contains no secret. If you later use an API key, keep it on the server as an environment variable and never commit it to GitHub.

## Contest submission
Upload this project to a public GitHub repository and submit that repository URL in the contest's **Source Code URL** field.
