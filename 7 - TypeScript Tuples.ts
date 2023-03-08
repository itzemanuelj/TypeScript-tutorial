/// TypeScript Tuples

/// Typed Arrays

let ourTuple: [number, boolean, string];

ourTuple = [5, false, "Coding God was here"];

let randomTuple: [number, boolean, string];

randomTuple = [1, true, "one"];

/// // We have no type safety in our tuple for indexes 3+

/// Readonly Tuple

const myArrayReadonlyTuple: [number, string, boolean] = [1, "true", true];

/// array cant be changed

/// Named Tuples

const graph: [x: number, y: number] = [55.2, 41.3];

const table: [x: number, y: number] = [1, 2];

/// The order of value types does not matter for Tuples:
/// false tulups value types have to match each array postion

/// Define ourTuple as string and boolean, in that order:

let timeTable: [string, boolean] = ["one", true];
