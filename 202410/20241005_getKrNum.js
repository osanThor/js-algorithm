const units = [
  "",
  "만",
  "억",
  "조",
  "경",
  "해",
  "자",
  "양",
  "구",
  "간",
  "정",
  "재",
  "극",
];

function solution(num, maxKoreanUnitCount, roundDownUnder1k = false) {
  let answer = "",
    n = num.length,
    idx = 0;

  while (n > 0 && idx - 1 <= maxKoreanUnitCount) {
    let currentValue = num.slice(Math.max(0, n - 4), n);
    if (roundDownUnder1k === true && Number(currentValue) < 1000 && idx === 0)
      break;

    if (Number(currentValue) > 0)
      answer = `${Number(currentValue)}${units[idx]}${answer}`;

    console.log(n, idx);
    n -= 4;
    idx++;
    console.log(n, idx);
  }
  return answer || "0";
}
console.log(solution("1234567890", 1));
