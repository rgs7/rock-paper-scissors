# Rock Paper Scissors

A small browser game: you play Rock Paper Scissors against the computer. Pick a move with the buttons; the computer chooses at random. **First player to reach 5 points wins** the match; scores and each round’s outcome show on the page.

## Files

| File | Role |
|------|------|
| `index.html` | Structure: title, choice buttons, score and result area |
| `styles.css` | Monochrome layout, centered card, typography |
| `javascript.js` | Game logic, DOM updates, win detection |

## How to run

Open `index.html` in a modern browser (double-click the file or use “Open with…” from your file manager). No build step or server is required.

## Rules

- **Rock** beats scissors, **paper** beats rock, **scissors** beats paper.
- Same choice as the computer is a tie; no point is awarded.
- When either side reaches 5 points, an alert names the winner and the scores reset for a new match.

🌐 Live site: [rgs7.github.io/rock-paper-scissors](https://rgs7.github.io/rock-paper-scissors/)