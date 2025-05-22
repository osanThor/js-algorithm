function solution(n) {
  return Array(n)
    .fill(0)
    .filter((_, i) => n % (i + 1) === 0 && (i + 1) % 2 === 1).length;
}

console.log(solution(15));
