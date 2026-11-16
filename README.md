# Oceanfront Condominiums Galle – Owner Portal

Static website (GitHub Pages) giving owners access to:

- Council records by term (Councils 1–4)
- Owner Handbook and proposed amended House Rules
- Constitution & By-laws (in force and proposed amendments)
- Notices to Owners
- Management Office contact details

Documents are held in Google Drive; the site links to the relevant folders.

## Update 03
- Removed the Monthly Financial Accounts and Renters sections
- Revised all wording to a formal, consistent style
- Added an introduction and quick-access links to the hero
- Council 4 shown first as the current Council
- Announcements replaced with a dedicated "Notices to Owners" section
- Click-to-call telephone numbers, search-engine `noindex` tag and footer usage notice

## Update 04
- New `portal-data.js` settings file for routine updates (no HTML editing needed):
  notices (auto-expire), "last updated" dates, direct document links,
  Council 4 office-bearers and office hours. Blank entries stay hidden.
- New Frequently Asked Questions section
- "&" used in headings and labels

## Routine updates
Edit `portal-data.js` on GitHub (pencil icon → edit → Commit changes).
Instructions and examples are written inside the file.

## Publishing
Upload `index.html`, `styles.css`, `script.js`, `portal-data.js` and `README.md` to the root of the repository.
Images, `logo.png` and `favicon.svg` are unchanged.
