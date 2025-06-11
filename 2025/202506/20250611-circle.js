function solution(elements) {
  const n = elements.length;
  const extended = elements.concat(elements);
  const sums = new Set();

  for (let len = 1; len <= n; len++) {
    let sum = 0;

    for (let i = 0; i < len; i++) {
      sum += extended[i];
    }
    sums.add(sum);

    for (let i = 1; i < n; i++) {
      sum = sum - extended[i - 1] + extended[i + len - 1];
      sums.add(sum);
    }
  }

  return sums.size;
}
