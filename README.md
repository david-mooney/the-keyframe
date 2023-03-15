# The Keyframe

[![Netlify Status](https://api.netlify.com/api/v1/badges/fa20d50a-d2a8-4938-8ca6-855a04c3f0e6/deploy-status)](https://app.netlify.com/sites/thekeyframe/deploys)

## Notes

Until CSS environment variables are a thing, the breakpoints are hardcoded. The values used are:

- `@media (min-width: 640px)`
- `@media (min-width: 768px)`
- `@media (min-width: 1024px)`
- `@media (min-width: 1280px)`
- `@media (min-width: 1536px)`

## TODO's

- [ ] Add MDX support (?)
- [ ] Add scroll tracker with section headings
- [ ] Add last updated date to posts at the end
- [ ] Add "next" and "previous" links to posts
- [ ] Add RSS feed
- [ ] Add sitemap
- [ ] Add "frame" animation behind logo
- [ ] Add form confetti
- [ ] Add "back to top" button
- [ ] Get .underline class working with theme toggle transition
- [ ] Consolidate circle button into more generic button component, make it scale with container
- [ ] Test fast-fuzzy to replace fuse.js
- [ ] Fix flashing disabled state on filters page if there's a query on load

## Cleanup

- [ ] Consolidate transition easings
- [ ] Search for TODO's and remove them
- [ ] Search for comments and remove them
- [ ] top down review and cleanup of all files
- [ ] Lighthouse audit and fix issues
- [ ] Move all the interfaces into the folder for them

## Future ideas

- [ ] Auto refresh posts-cache during local development
- [ ] search should highlight keywords in the post using the `mark` tag and FuseJs includeMatches option
- [ ] Swap React for Preact when it's compatible to reduce the bundle size
- [ ] Netlify functions can have a slow cold-start, an alternative might be needed
