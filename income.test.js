import { test } from "node:test";
import assert from "node:assert/strict";
import { income, weightFactor } from "./income.js";

test("base weight gives factor 1", () => {
  assert.equal(weightFactor(2, 2), 1);
});

test("base Shark is 15K/s", () => {
  assert.equal(income({ baseIncome: 15000, weight: 1, baseWeight: 1 }), 15000);
});

test("mutation and count multiply", () => {
  assert.equal(income({ baseIncome: 100, mutation: 2.5, weight: 1, baseWeight: 1, count: 3 }), 750);
});

test("curve is continuous at 125x", () => {
  const below = weightFactor(125 - 1e-9, 1);
  const above = weightFactor(125 + 1e-9, 1);
  assert.ok(Math.abs(below - above) < 1e-6);
});

test("missing weight uses base weight", () => {
  assert.equal(weightFactor(undefined, 3), 1);
});
