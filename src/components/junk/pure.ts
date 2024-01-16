// A pure function:
// 1. Given the same input -> same output. Always!
// 2. No side-effects, neither reading nor writing

let globalResult: number;

function add(a: number, b: number): number {
  const result = a + b + new Date().getTime();
  globalResult = result;
  return result;
}

let lastId = 0;
const getId = () => {
  const nextId = lastId + 1;
  lastId = nextId;
  return nextId;
};
