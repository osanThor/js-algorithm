// Lv.2 귤고르기

function solution(k, tangerine) {
  let answer = 0;
  const counts = {};
  for (let count of tangerine) counts[count] = (counts[count] || 0) + 1;

  const countArr = Object.values(counts).sort((a, b) => b - a);

  let totalCount = 0;
  for (let count of countArr) {
    answer++;
    totalCount += count;
    if (totalCount >= k) break;
  }

  return answer;
}
