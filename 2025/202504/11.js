function solution(s) {
  const stack = [];
  for (const x of s) {
    if (stack.length > 0 && stack[stack.length - 1] === x) {
      stack.pop();
    } else stack.push(x);
  }
  return !stack.length ? 1 : 0;
}

console.log(solution("baabaa"));
