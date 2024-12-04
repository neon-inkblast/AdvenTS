declare global {
  interface Array<T> {
    sum(): number;
    multiply(): number;
    toNumbers(): number[];
    min(): T;
    max(): T;
  }
}

export function extendArray() {
  Array.prototype.sum = function <T>(this: Array<T>) {
    if (this.length === 0) {
      return 0;
    }
    return this.map((x) => +x).reduce((a, b) => a + b);
  };
  Array.prototype.multiply = function <T>(this: Array<T>) {
    if (this.length === 0) {
      return 0;
    }
    return this.map((x) => +x).reduce((a, b) => a * b);
  };
  Array.prototype.toNumbers = function <T>(this: Array<T>) {
    return this.map((x) => +x);
  };
  Array.prototype.min = function <T>(this: Array<T>) {
    return this.map((x) => +x);
  };
  Array.prototype.max = function <T>(this: Array<T>) {
    return this.map((x) => +x);
  };
}

export function sum<T>(arr: T[]): number {
  if (arr.length === 0) {
    return 0;
  }
  return arr.map((x) => +x).reduce((a, b) => a + b);
}

export function multiply<T>(arr: T[]): number {
  if (arr.length === 0) {
    return 0;
  }
  return arr.map((x) => +x).reduce((a, b) => a * b);
}

export function addArrays(a: number[], ...b: number[][]): number[] {
  if (b.some((arr) => a.length !== arr.length)) {
    throw new Error("mismatched arrays");
  }
  return a.map((a, i) => a + sum(b.map((x) => x[i])));
}

export function multiplyArray(a: number[], b: number): number[] {
  return a.map((a) => a * b);
}

export function max<T>(arr: T[], convertToNumbers = true): number | T {
  return sortDesc(arr, convertToNumbers)[0];
}

export function min<T>(arr: T[], convertToNumbers = true): number | T {
  return sortAsc(arr, convertToNumbers)[0];
}

export function sortAsc<T>(arr: T[], convertToNumbers = false): Array<T | number> {
  if (convertToNumbers) {
    return arr.toNumbers().toSorted((a, b) => a - b);
  }
  return arr.toSorted((a, b) => (a === b ? 0 : a < b ? -1 : 1));
}

export function sortDesc<T>(arr: T[], convertToNumbers = false): Array<T | number> {
  if (convertToNumbers) {
    return arr.toNumbers().toSorted((a, b) => b - a);
  }
  return arr.toSorted((a, b) => (a === b ? 0 : a > b ? -1 : 1));
}

export function toNumbers<T>(arr: T[]): number[] {
  return arr.map((x) => +x);
}

export function splitOnEmpty(arr: string[]): string[][] {
  return splitOnX(arr, "");
}

export function splitOnX<T>(arr: T[], token: T): T[][] {
  const newArr: T[][] = [];
  let tempArr: T[] = [];
  arr.forEach((x) => {
    if (x === token) {
      newArr.push(tempArr);
      tempArr = [];
    } else {
      tempArr.push(x);
    }
  });
  if (tempArr.length > 0) {
    newArr.push(tempArr);
  }
  return newArr;
}

export function splitEvery<T>(arr: T[], n: number): T[][] {
  const newArr: T[][] = [];
  let tempArr: T[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % n === 0 && tempArr.length > 0) {
      newArr.push(tempArr);
      tempArr = [];
    }
    tempArr.push(arr[i]);
  }

  if (tempArr.length > 0) {
    newArr.push(tempArr);
  }
  return newArr;
}

/**
 *
 * @param size size of new array
 * @param fill element to fill new array with, or a function that creates elements to fill
 * @returns
 */
export function createArrayOf<T>(size: number, fill: (() => T) | T): T[] {
  return new Array(size)
    .fill(0)
    .map((_) => (typeof fill === "function" ? (fill as () => T)() : fill));
}

/**
 *
 * @param rows size of the base (x) dimension in the new array
 * @param columns size of the inner (y) dimension of the new array
 * @param fill element to fill new array with, or a function that creates elements to fill
 * @returns
 */
export function create2dArrayOf<T>(rows: number, columns: number, fill: (() => T) | T): T[][] {
  return createArrayOf<any>(rows, () => createArrayOf<T>(columns, fill));
}

/**
 *
 * @param rows size of the base (x) dimension in the new array
 * @param columns size of the second (y) dimension of the new array
 * @param layers size of inner (z) dimension of a row element in the new array
 * @param fill element to fill new array with, or a function that creates elements to fill
 * @returns
 */
export function create3dArrayOf<T>(
  rows: number,
  columns: number,
  layers: number,
  fill: (() => T) | T,
): T[][][] {
  return create2dArrayOf<T[]>(rows, columns, () => createArrayOf<T>(layers, fill));
}
