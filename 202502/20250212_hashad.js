function solution(n) {
  let sum = 0,
    temp = n;
  while (temp) {
    sum += temp % 10;
    temp = Math.floor(temp / 10);
  }
  return n % sum === 0;
}
console.log(solution(10));
