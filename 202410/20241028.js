// ############# 같은 숫자는 싫어
// 문제 설명
// 배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다. 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다. 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다. 예를 들면,

// arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
// arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.
// 배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.

// 제한사항
// 배열 arr의 크기 : 1,000,000 이하의 자연수
// 배열 arr의 원소의 크기 : 0보다 크거나 같고 9보다 작거나 같은 정수
// 풀이1
// function solution(arr) {
//   let answer = [];
//   let before = null;
//   for (let i = 0; i < arr.length; i++) {
//     if (before !== arr[i]) {
//       answer.push(arr[i]);
//       before = arr[i];
//     }
//   }
//   return answer;
// }
// 풀이2
// function solution(arr) {
//   return arr.filter((num, idx) => num !== arr[idx + 1]);
// }
// 풀이3
// function solution(arr) {
//   let answer = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== arr[i + 1]) {
//       answer.push(arr[i]);
//     }
//   }
//   return answer;
// }
// [1,1,3,3,0,1,1]	[1,3,0,1]
// const arr = [1, 1, 3, 3, 0, 1, 1];
// console.log(solution(arr));

// ############# 나누어 떨어지는 숫자 배열
// 문제 설명
// array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
// divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

// 제한사항
// arr은 자연수를 담은 배열입니다.
// 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
// divisor는 자연수입니다.
// array는 길이 1 이상인 배열입니다.
// [5, 9, 7, 10]	5	[5, 10]

// function solution(arr, divisor) {
//   let answer = [];
//   for (let x of arr) {
//     if (x % divisor === 0) answer.push(x);
//   }
//   if (answer.length === 0) return [-1];
//   return answer.sort((a, b) => a - b);
// }
// // [2, 36, 1, 3]	1	[1, 2, 3, 36]
// const arr = [5, 9, 7, 10],
//   n = 5;

// console.log(solution(arr, n));

// ############# 두 정수 사이의 합
// 문제 설명
// 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
// 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

// 제한 조건
// a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
// a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
// a와 b의 대소관계는 정해져있지 않습니다.

// function solution(a, b) {
//   if (a === b) return a;
//   const max = Math.max(a, b);
//   const min = Math.min(a, b);
//   let answer = 0;
//   for (let i = min; i <= max; i++) answer += i;
//   return answer;
// }
// function solution(a, b) {
//     // Math.abs() 절댓값 구하기
//   return ((a + b) * (Math.abs(a - b) + 1)) / 2;
// }
// console.log(solution(3, 5));

// ############# 문자열 내 p와 y의 개수
// 문제 설명
// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.
// 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

// 제한사항
// 문자열 s의 길이 : 50 이하의 자연수
// 문자열 s는 알파벳으로만 이루어져 있습니다.
// function solution(str) {
//   let pCount = 0,
//     yCount = 0;
//   for (let s of str) {
//     if (s.toLowerCase() === "p") pCount++;
//     if (s.toLowerCase() === "y") yCount++;
//   }
//   return pCount === yCount;
// }
// function solution(s) {
//   return (
//     s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
//   );
// }
// "pPoooyY"	true
// "Pyy"	false
// const str = "pPoooyY";
// console.log(solution(str));

// ############# 문자열 내림차순으로 배치하기
// 문제 설명
// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
// s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

// 제한 사항
// str은 길이 1 이상인 문자열입니다.
// "Zbcdefg"	"gfedcbZ"
// function solution(str) {
//   return str
//     .split("")
//     .sort((a, b) => (a > b ? -1 : 1))
//     .join("");
// }
// function solution(str) {
//   return str.split("").sort().reverse(), join();
// }
// const str = "Zbcdefg";
// console.log(solution(str));

// ############# 문자열 다루기 기본
// 문제 설명
// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

// 제한 사항
// s는 길이 1 이상, 길이 8 이하인 문자열입니다.
// s는 영문 알파벳 대소문자 또는 0부터 9까지 숫자로 이루어져 있습니다.
// "a234"	false
// function solution(str) {
//   const n = str.length;
//   if (n !== 4 || n !== 6) {
//     for (let i = 0; i < n; i++) {
//       if (isNaN(parseInt(str[i], 10))) return false;
//     }
//   }
//   return true;
// }
// function solution(str) {
//   const regex = /^\d{6}$|^\d{4}$/;
//   return regex.test(str);
// }
// console.log(solution("1234"));

// ############## 서울에서 김서방 찾기
// 문제 설명
// String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요. seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

// 제한 사항
// seoul은 길이 1 이상, 1000 이하인 배열입니다.
// seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.
// "Kim"은 반드시 seoul 안에 포함되어 있습니다.

// ["Jane", "Kim"]	"김서방은 1에 있다"

// function solution(arr) {
//   for (let i = 0; i < arr.length; i++)
//     if (arr[i] === "Kim") return `김서방은 ${i}에 있다`;
// }
// function solution(seoul) {
//   let idx = seoul.indexOf("Kim");
//   return "김서방은 " + idx + "에 있다";
// }

// ################ 소수 찾기
// 문제 설명
// 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.
// 소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
// (1은 소수가 아닙니다.)

// 제한 조건
// n은 2이상 1000000이하의 자연수입니다.
// 10	4
// 5	3

// function isPrime(n) {
//   if (n === 1) return false;
//   for (let i = 2; i <= parseInt(Math.sqrt(n)); i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }

// function solution(n) {
//   let count = 0;
//   for (let i = 2; i <= n; i++) {
//     let isPrime = true;
//     for (let j = 2; j <= parseInt(Math.sqrt(i)); j++) {
//       if (i % j === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) count++;
//   }
//   return count;
// }
// function solution(n) {
//   const arr = Array(n + 1)
//     .fill(true)
//     .fill(false, 0, 2);

//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (arr[i]) {
//       for (let j = i * i; j <= n; j += i) arr[j] = false;
//     }
//   }
//   return arr.filter((bool) => bool === true).length;
// }
// console.log(solution(5));

// ################# 수박수박수박수박수박수?
// 문제 설명
// 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

// 제한 조건
// n은 길이 10,000이하인 자연수입니다.
// function solution(n) {
//   let answer = "";
//   for (let i = 1; i <= n; i++) {
//     if (i % 2 === 0) answer += "박";
//     else answer += "수";
//   }
//   return answer;
// }
// console.log(solution(5));

// ################## 문자열을 정수로 바꾸기
// 문제 설명
// 문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.

// 제한 조건
// s의 길이는 1 이상 5이하입니다.
// s의 맨앞에는 부호(+, -)가 올 수 있습니다.
// s는 부호와 숫자로만 이루어져있습니다.
// s는 "0"으로 시작하지 않습니다.
// function solution(str) {
//   return Number(str);
// }

// console.log(solution("+12341235"));

// ###################### 시저 암호
// 문제 설명
// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

// 제한 조건
// 공백은 아무리 밀어도 공백입니다.
// s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
// s의 길이는 8000이하입니다.
// n은 1 이상, 25이하인 자연수입니다.
// 입출력 예
// s	n	result
// "AB"	1	"BC"
// "z"	1	"a"
// "a B z"	4	"e F d"

function solution(str, n) {
  let answer = "";
  for (let i = 0; i < str.length; i++) {}
}

console.log(solution("AB", 1));
