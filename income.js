// Steal an Egg income per second (fan model, see README for how sure it is).
const LOW_EXP = 37 / 60;
const HIGH_EXP = 2 / 5;
const BREAK = 125;

export function weightFactor(weight, baseWeight) {
  if (!(baseWeight > 0)) throw new Error("baseWeight must be > 0");
  const ratio = (weight ?? baseWeight) / baseWeight;
  if (ratio <= BREAK) return ratio ** LOW_EXP;
  return BREAK ** LOW_EXP * (ratio / BREAK) ** HIGH_EXP;
}

export function income({ baseIncome, mutation = 1, weight, baseWeight, count = 1 }) {
  return baseIncome * mutation * weightFactor(weight, baseWeight) * count;
}
