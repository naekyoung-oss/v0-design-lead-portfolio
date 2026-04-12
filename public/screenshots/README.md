# Portfolio Screenshots

This directory contains automated screenshot captures of all portfolio pages for easy reference and documentation.

## Screenshots Generated

| Page | File | URL |
|------|------|-----|
| Home | `home.png` | `/` |
| About | `about.png` | `/about` |
| Experience | `experience.png` | `/experience` |
| Projects | `projects.png` | `/projects` |
| Experiments | `experiments.png` | `/experiments` |
| Contact | `contact.png` | `/contact` |

## Regenerating Screenshots

To regenerate all screenshots, run:

```bash
pnpm run screenshots
```

This will:
1. Start the Next.js dev server
2. Automatically capture full-page screenshots of each route
3. Save them to this directory
4. Shut down the server

### Requirements
- Node.js / pnpm installed
- System Chromium browser installed (`chromium` package on Linux)
- The Puppeteer dependency is included in devDependencies

## Technical Details

Screenshots are captured using Puppeteer at **1280x1024** viewport resolution with:
- Transparent background (`omitBackground: true`)
- Full page capture
- 2-second animation settle time per page
- Network idle waiting (no pending requests)

The script is located at: `scripts/capture-screenshots.js`

## Notes

- Screenshots are used for documentation, design review, and sharing progress
- Keep screenshots in version control to track UI/design changes over time
- If you modify page layouts, remember to regenerate screenshots with `pnpm run screenshots`
