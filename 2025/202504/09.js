function solution(decimal) {
  const stack = [];
  while (decimal > 0) {
    const temp = decimal % 2;
    stack.push(temp);
    decimal = Math.floor(decimal / 2);
  }
  return Number(stack.reverse().join(""));
}

console.log(solution(10));
