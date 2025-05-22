function solution(n) {
  const count = n.toString(2).replaceAll("0", "").length;
  let number = n + 1;
  while (true) {
    const binary = number.toString(2).replaceAll("0", "").length;
    if (binary === count) {
      break;
    }
    number++;
  }

  return number;
}

console.log(solution(78));
