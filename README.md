# SQL Practice Generator

A single-file, browser-based SQL practice tool. Describe the SQL concept you want to practice in plain English, and the app generates a realistic dataset (200+ rows) and a scenario for you to solve.

## How it works

1. **Describe a problem** — type what you want to practice (e.g. *"window functions ranking products by sales within each category"*) or pick one of the example chips.
2. **Generate tables** — the app calls the Claude API to create a schema, seed it with realistic data, and write a problem statement.
3. **Write SQL** — use the editor on the right to query the generated tables. Press `⌘/Ctrl + Enter` to run.
4. **Check your answer** — click **Check vs solution** to compare your output against the reference query (row-order independent).
5. **Peek at hints/solution** — expand the collapsible sections in the left panel if you get stuck.

## Features

- Runs SQLite entirely in the browser via [sql.js](https://sql.js.org) — no backend, no installation
- 200+ rows per table with realistic value distributions (skewed categories, outliers, ties, NULLs) so queries produce non-trivial results
- Click any table card in the schema panel to instantly `SELECT * LIMIT 20` from it
- API key saved to `localStorage` — enter it once and it persists across sessions

## Setup

No install required. Just open `sql_practice.html` in any modern browser:

```bash
open sql_practice.html
```

Then paste your [Anthropic API key](https://console.anthropic.com/) into the field in the top-right corner. The key never leaves your browser — it is sent directly to `api.anthropic.com` and stored only in your browser's `localStorage`.

## Example prompts

| Prompt | Concepts practised |
|---|---|
| Rank employees by salary within each department | `ROW_NUMBER`, `RANK`, window functions |
| Find customers who placed orders in every month of 2024 | `GROUP BY`, `HAVING`, date functions |
| Show the top 3 products by revenue per category | `DENSE_RANK`, CTEs |
| Find pairs of users who signed up on the same day | Self-join |
| Build an employee–manager hierarchy | Recursive CTE |
| Find orders where no item was discounted | `NOT EXISTS`, subqueries |

## Requirements

- A modern browser (Chrome, Firefox, Safari, Edge)
- An Anthropic API key — the app uses `claude-sonnet-4-6` for table generation
