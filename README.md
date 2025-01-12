# TypeScript Type Error: Combining Arrays of Different Types

This repository demonstrates a common TypeScript type error that occurs when attempting to combine arrays of different types using the spread syntax.  The error message is:  `Type 'string' is not assignable to type 'number'.`

The `bug.ts` file contains the erroneous code, while `bugSolution.ts` provides a corrected version.

The issue arises because TypeScript's type system enforces type safety.  The `combine` function is declared to return a `number[]`, but the attempt to combine a `number[]` with a `string[]` results in a type mismatch.