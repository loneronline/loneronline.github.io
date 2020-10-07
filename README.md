## How to update the landing page for an event

1. Create a feature branch for staging.
1. Copy the existing `index.html` to its own page for achiving, such as `16.html` for archiving the Vol. 16 event landing page.
1. On `index.html`, update the flyer video, countdown date, banner background image, and primary colour.
1. Check the page looks as expected on desktop and on mobile. `python -m http.server` helps here.
1. If the event is ready to be announced, rebase against master (in case of collaborator changes), `git merge` the feature branch into master, and push.
