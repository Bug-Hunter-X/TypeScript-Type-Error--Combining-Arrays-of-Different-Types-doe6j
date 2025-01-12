function combine(arr1: number[], arr2: number[]): number[] {
  return [...arr1, ...arr2];
}

function combineGeneric<T>(arr1: T[], arr2: T[]): T[] {
  return [...arr1, ...arr2];
}

const arr1: number[] = [1, 2, 3];
const arr2: number[] = [4, 5, 6];
const arr3: string[] = ['a', 'b', 'c'];

const combined1: number[] = combine(arr1, arr2); // Works fine
const combined2: string[] = combineGeneric(arr3, arr3); // Works with generics
//const combined3: number[] = combine(arr1, arr3); // This will still result in an error