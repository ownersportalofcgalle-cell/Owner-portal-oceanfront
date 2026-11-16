/* =====================================================================
   OCEANFRONT OWNER PORTAL — SETTINGS
   This is the only file you need to edit for routine updates.
   On GitHub: open this file, click the pencil icon (Edit), make your
   changes, then click "Commit changes". The site updates in 1–2 minutes.

   RULES
   - Keep every quotation mark " and comma , exactly as shown.
   - Dates are written as "YYYY-MM-DD", for example "2026-11-20".
   - Anything left as "" (empty) or [] (empty list) is hidden on the site.
   ===================================================================== */

window.PORTAL_DATA = {

  /* ---------- 1. NOTICES TO OWNERS ----------
     Newest notices are shown first. A notice disappears automatically
     the day after its "expires" date. "link" is optional.
     Copy the example inside the [ ] brackets, remove the // marks,
     and fill it in. Separate notices with a comma.

     EXAMPLE:
     {
       date: "2026-11-20",
       title: "Council Meeting – CM 05",
       body: "The next Council meeting will be held on 28 November 2026 at 6.00 pm.",
       expires: "2026-11-28",
       link: ""
     },
  */
  notices: [

  ],

  /* ---------- 2. LAST UPDATED DATES ----------
     Shown under each section heading as "Updated 12 November 2026". */
  lastUpdated: {
    councils: "",
    handbook: "",
    governance: ""
  },

  /* ---------- 3. DIRECT DOCUMENT LINKS ----------
     Paste the Google Drive link of each individual file
     (in Drive: right-click the file > Share > Copy link).
     A "View document" button appears once a link is added. */
  documents: {
    ownerHandbook: "",
    houseRules: "",
    constitution: "",
    amendments: ""
  },

  /* ---------- 4. COUNCIL 4 OFFICE-BEARERS ----------
     EXAMPLE:
     { role: "Chairman", name: "Mr. A. Perera" },
     { role: "Secretary", name: "Dr. B. Silva" },
  */
  councilMembers: [

  ],

  /* ---------- 5. OFFICE HOURS ----------
     EXAMPLE: "Monday – Friday, 8.30 am – 5.00 pm" */
  officeHours: ""
};
