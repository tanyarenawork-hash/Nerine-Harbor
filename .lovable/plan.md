## Plan: Hide the Lovable badge

The published site currently shows the "Edit with Lovable" badge at the bottom. The user wants it removed.

### What will change
- Set the project's badge visibility to hidden so the badge no longer appears on the published site.

### How it will be done
- Use the Lovable publish settings API to toggle `hide_badge` to `true`.
- Note: hiding the badge requires a Pro plan or higher. If the workspace is on a Free plan, the request will need an upgrade first.

### Expected result
- The badge is removed from the live deployment after the setting takes effect.
- No code changes are needed in the project.
