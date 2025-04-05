const CORRECT = {
  ")": "(",
  "}": "{",
  "]": "[",
};
const isCorrect = (s) => {
  const stack = [];
  for (const x of s) {
    if (x === "(" || x === "[" || x === "{") stack.push(x);
    else if (CORRECT[x] !== stack.pop()) return false;
  }
  return stack.length ? false : true;
};

const rotate = (s) => s.substring(1) + s[0];

function solution(s) {
  let count = 0;
  const n = s.length;

  for (let i = 0; i < n; i++) {
    s = rotate(s);
    count += isCorrect(s) ? 1 : 0;
  }
  return count;
}

console.log(solution("}]()[{"));
