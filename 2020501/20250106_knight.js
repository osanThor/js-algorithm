function solution(number, limit, power) {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    let count = 0;
    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        if (i / j === j) count += 1;
        else count += 2;
        if (count > limit) {
          count = power;
          break;
        }
      }
    }
    answer += count;
  }
  return answer;
}
// function solution(number, limit, power) {
//   let answer = 0;
//   for (let i = 1; i <= number; i++) {
//     let count = 0;
//     for (let j = 1; j <= i; j++) {
//       if (i % j === 0) count++;
//     }
//     answer += count > limit ? power : count;
//   }
//   return answer;
// }
// function solution(number, limit, power) {
//   let arr = [];

//   for (let i = 1; i <= number; i++) {
//     let count = 0;
//     for (let j = 1; j <= i; j++) {
//       if (i % j === 0) count++;
//     }
//     arr.push(count);
//   }
//   return arr.reduce((a, b) => {
//     if (b > limit) return a + power;
//     else return a + b;
//   }, 0);
// }

console.log(solution(5, 3, 2));
