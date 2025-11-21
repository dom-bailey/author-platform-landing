


Phase 2: Navigation Decisions (We'll go through each one)

  A. 404 Error Page (404.html)

  Currently has 2 links to "/":
  1. Logo link (line 658) - Currently goes to author homepage
    - Question: Should the logo go to the new reader homepage (/) or author page (/author)?
   - Answer: new reader homepage
  2. "Return to Homepage" button (line 682)
    - Question: Should this go to reader (/) or give two options (Reader/Author)?
   - Answer: new reader homepage


  B. Thank You Page (thank-you.html)

  Currently has 1 "Return Home" button going to "/":
  - Question: This is a general thank you page - should it go to reader homepage (/) or author (/author)?
   - Answer: new reader homepage


  C. Author-Focused Form Pages

  These are forms specifically for authors, currently redirecting to "/" after submission:

  request-invitation.html (Author invitation request)
  - Cancel button (line 1015) → Currently goes to "/"
  - Success redirect (line 1225) → Currently goes to "/"
  - Success redirect (line 1301) → Currently goes to "/"
  - Question: Since this is an author form, should these go to /author instead?
   - Answer: author page


  you-are-invited.html (Author invitation acceptance)
  - Cancel button (line 1102) → Currently goes to "/"
  - Bot detection redirect (line 1207) → Currently goes to "/"
  - Success redirect (line 1461) → Currently goes to "/"
  - Success redirect (line 1559) → Currently goes to "/"
  - Question: Should these go to /author since it's author-specific?
- Answer: author page

  your-invitation-form.html (Author onboarding)
  - Cancel button (line 1286) → Currently goes to "/"
  - Success redirect (line 1587) → Currently goes to "/"
  - Success redirect (line 1702) → Currently goes to "/"
  - Question: Should these go to /author?
- Answer: author page

  D. Neutral Form Pages

  stay-updated.html (General newsletter signup)
  - Cancel button (line 553) → Currently goes to "/"
  - Bot detection redirect (line 647) → Currently goes to "/"
  - Success redirect (line 687) → Currently goes to "/"
  - Question: Since this could be for anyone, should it go to reader homepage (/) or depend on where they came from?
- Answer: author page (the button to get to the stay updated is only on the author page)

  E. Reader-Focused Form

  join-the-waitlist.html (Reader waitlist)
  - Currently redirects to "/reader" (lines 588, 628)
  - Question: After swap, should this stay as "/" (which will be the reader page) or explicitly use "/reader" if you want to keep that URL?
- Answer: new reader homepage


  F. Audience Toggle Links

  In current index.html (future author.html):
  - Reader toggle currently goes to "/reader"
  - Question: Should it go to "/" (new reader homepage)?
- Answer: new reader homepage

  In current reader.html (future index.html):
  - Author toggle currently goes to "/"
  - Question: Should it go to "/author"?
- Answer: author page



