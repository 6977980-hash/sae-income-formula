# sae-income-formula

A tiny, dependency-free JavaScript function for the **Steal an Egg** (Roblox) pet income formula, plus a checklist for testing it in game.

This is the same math used by the [Steal an Egg income calculator](https://updateotter.com/steal-an-egg/calculator/) on UpdateOtter. I put it here so anyone can read it, check it, and tell me if it is wrong.

## The formula

```
income/s = baseIncome × mutationMultiplier × weightFactor × count

ratio = weight / baseWeight
weightFactor = ratio ^ (37/60)                              if ratio <= 125
weightFactor = 125^(37/60) × (ratio / 125) ^ (2/5)          if ratio > 125
```

## Usage

```js
import { income } from "./income.js";

income({ baseIncome: 15000, mutation: 1, weight: 1, baseWeight: 1, count: 1 });
// 15000  (a base Shark, 15K Cash/s)
```

Run the tests with Node 18+:

```
node --test
```

## How sure is this?

- In-game checks so far: **1** (Golden Chicken, 23 Oct 2026, matched).
- Results above 125x base weight are **estimates**. No one on our side has tested a pet that heavy yet.
- Game passes and boosts (e.g. Cash booster) are **not** included.

If you can read a pet's Cash/s in game, open an issue with: pet, mutation, weight, and the number you see. Heavy pets help the most.

## Data credit

Base income, base weight and mutation multipliers come from the Steal an Egg community wiki on Fandom, licensed CC BY-SA. This repo contains only the formula and a few example values for tests.

## Disclaimer

Independent fan project. Not made by, affiliated with, or endorsed by Roblox Corporation or the game's developers.

## License

Code: MIT.
