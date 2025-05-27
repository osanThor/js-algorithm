function solution(n) {
  let len = n.toString(2);
  let count = 0;
  for (let x of len) {
    if (x === "1") count++;
  }
  return count;
}
