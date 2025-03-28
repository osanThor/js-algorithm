// Lv.2 예상 대진표
function solution(n, a, b) {
  let answer = 0;

  for (let round = 1; a !== b; round++) {
    a = Math.ceil(a / 2); // 각 라운드에서 두명씩 붙기 때문에 라운드마다 2로나눈 정수로 교체
    b = Math.ceil(b / 2);
    answer = round;
  }

  return answer;
}
function solution(n, a, b) {
  let answer = 0;

  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer++;
  }

  return answer;
}

console.log(solution(8, 4, 7));
