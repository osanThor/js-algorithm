// Lv.2 멀리 뛰기

// function solution(n) {
//   if (n === 1 || n === 2) return n;
//   return (solution(n - 1) + solution(n - 2)) % 1234567;
// }
// 시간 초과
function solution(n) {
  const dp = Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
  }
  return dp[n];
}

// 예시 실행
console.log(solution(4)); // 5
console.log(solution(3)); // 3
