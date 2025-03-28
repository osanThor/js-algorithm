// Lv.1 최소공약수 최대공배수
function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function solution(n, m) {
  let answer = [];
  answer.push(gcd(n, m));
  answer.push(lcm(n, m));
  return answer;
}

console.log(solution(3, 12));
