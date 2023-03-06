/// TypeScript Arrays

const names: string[] = [];
names.push("justin");

/// Readonly
/// prevents arrays fro being changed cant add array methods

let nameList: string[] = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
];
let nameList1: readonly string[] = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
];

/// Type Inference
/// TypeScript can infer the type of an array if it has values.

/// Prevent the array from being changed:

const lName: readonly string[] = [];
