// Lv.1
function solution(t, p) {
  let answer = 0;
  for (let i = 0; i <= t.length - p.length; i++) {
    let targetNum = Number(t.slice(i, i + p.length));
    if (targetNum <= Number(p)) answer++;
  }
  return answer;
}

console.log(solution("500220839878", "7"));
