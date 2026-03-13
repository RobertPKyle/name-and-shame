# Name & Shame

A community-driven site that lists companies known for ghosting job candidates and other unprofessional hiring behavior.

## How to Add a Company

Companies are stored in [`data/companies.json`](./data/companies.json). To add one:

1. **Fork** this repository
2. **Edit** `data/companies.json` and add a new entry (see format below)
3. **Open a pull request** — it will be reviewed before going live

### Entry Format

```json
{
  "id": 7,
  "name": "Company Name",
  "tags": ["Ghosting", "Lowballing"]
}
```

- `id` — increment from the last entry in the file
- `name` — full company name
- `tags` — one or more tags from the list below (must match exactly)

### Available Tags

| Tag | Description |
|-----|-------------|
| `Ghosting` | Company stopped responding entirely with no explanation |
| `Slow response time` | Consistently slow to reply, leaving candidates waiting weeks |
| `More than 3 interviews` | Excessive interview rounds beyond a reasonable process |
| `Fake offers` | Offer extended then rescinded, or offer was misleading |
| `Lack of transparency` | Vague about role, timeline, compensation, or process |
| `Rude` | Disrespectful or dismissive behavior toward candidates |
| `Lowballing` | Compensation offer significantly below market rate |

Please only use tags from this list so filtering works correctly on the site.

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router)
- TypeScript
- Tailwind CSS v4

## Support

If this site has been useful to you, consider buying me a coffee!

[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/retrorobert)
