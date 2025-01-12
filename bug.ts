function combine(arr1: number[], arr2: number[]): number[] {
  return [...arr1, ...arr2];
}

const arr1: number[] = [1, 2, 3];
const arr2: string[] = ['a', 'b', 'c'];

const combined: number[] = combine(arr1, arr2); // Type 'string' is not assignable to type 'number'.