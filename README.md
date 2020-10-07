## How to update the landing page for an event

1. Create a feature branch for staging.
1. Pull in new static assets for the event, such as the flyer video and banner image. Find the `rgb()` representation of the primary colour for the event. This is generally the brightest colour in the event's colour scheme since the landing page background is dark grey.
1. Copy the existing `index.html` to its own page for achiving, such as `16.html` for archiving the Vol. 16 event landing page.
1. On `index.html`, update the flyer video, countdown date, banner background image, and primary colour.
1. Check the page looks as expected on desktop and on mobile. `python -m http.server` helps here.
1. If the event is ready to be announced, rebase against master (in case of collaborator changes), `git merge` the feature branch into master, and push.
