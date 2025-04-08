function solution(prices) {
  const n = prices.length;
  const arr = Array(n).fill(0);
  const stack = [0];
  for (let i = 1; i < n; i++) {
    while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
      const j = stack.pop();
      arr[j] = i - j;
    }
    stack.push(i);
  }

  while (stack.length > 0) {
    const j = stack.pop();
    arr[j] = n - 1 - j;
  }

  return arr;
}

console.log(solution([1, 2, 3, 2, 3]));
