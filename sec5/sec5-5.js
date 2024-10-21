// 최대매출
// 현수의 아빠는 제과점을 운영합니다. 현수 아빠는 현수에게 N일 동안의 매출기록을 주고 연속 된 K일 동안의 최대 매출액이 얼마인지 구하라고 했습니다.
// 만약 N=10이고 10일 간의 매출기록이 아래와 같습니다. 이때 K=3이면
// 12 15 11 20 25 10 20 19 13 15
// 연속된 3일간의 최대 매출액은 11+20+25=56만원입니다. 여러분이 현수를 도와주세요.

// ▣ 입력설명
// 첫 줄에 N(5<=N<=100,000)과 K(2<=K<=N)가 주어집니다.
// 두 번째 줄에 N개의 숫자열이 주어집니다. 각 숫자는 500이하의 음이 아닌 정수입니다.

// ▣ 출력설명
// 첫 줄에 최대 매출액을 출력합니다.

function solution(k, arr) {
  let answer, // 최대 매출액
    sum = 0; // 합계

  for (let i = 0; i < k; i++) sum += arr[i];
  answer = sum;
  for (let i = k; i < arr.length; i++) {
    const dif = arr[i] - arr[i - k];
    sum += dif;
    answer = Math.max(answer, sum);
  }

  return answer;
}

const arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, arr));

// 풀이2
function solution2(k, arr) {
  let answer = (rt = sum = 0);

  let n = arr.length;
  for (let lt = 0; lt < n - k + 1; lt++) {
    while (rt - lt < k) {
      sum += arr[rt++];
    }

    answer = Math.max(answer, sum);
    sum -= arr[lt];
  }

  return answer;
}

// 풀이3
function solution3(k, arr) {
  let answer,
    sum = 0;

  for (let i = 0; i <= arr.length - k; i++) {
    const newArr = [...arr].slice(i, i + k); // .slice() 를 사용하여 k일 만큼의 각각 매출을 2차원 배열로
    sum = newArr.reduce((a, b) => a + b); // 각 날마다 매출의 합을 구함
    answer = Math.max(answer, sum);
  }

  return max;
}
console.log(solution3(3, arr));
// 풀이3의 경우
// answer의 길이만큼 돌기 때문에 이중 for문
// 시간복잡도 O(n^2)
// 풀이1, 풀이2는 for의 i만큼 반복이기 때문에 시간 복잡도 0(n)
