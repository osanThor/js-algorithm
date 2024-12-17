// 1
// function solution(str) {
//   let count = 0;
//   for (let x of str) {
//     if (x === "(") count++;
//     else if (x === ")") count--;
//   }
//   return count === 0 ? "YES" : "NO";
// }
// console.log(solution("(())()"));

// 2
function solution(str) {
  let answer,
    stack = [];
  for (let x of str) {
    if (x === ")") {
      while (stack.pop() !== "(");
    } else stack.push(x);
  }
  answer = stack.join("");
  return answer;
}
// function solution(str) {
//   let answer = "",
//     count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === "(") count++;
//     else if (str[i] === ")") count--;
//     if (count === 0 && str[i] !== ")") answer += str[i];
//   }
//   return answer;
// }
console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));
