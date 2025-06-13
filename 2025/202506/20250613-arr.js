function solution(n, left, right) {
  const answer = [];

  for (let k = left; k <= right; k++) {
    const row = Math.floor(k / n);
    const col = k % n;
    answer.push(Math.max(row, col) + 1);
  }

  return answer;
}
