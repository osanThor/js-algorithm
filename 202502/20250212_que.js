function solution(queue1, queue2) {
  let sum1 = queue1.reduce((a, b) => a + b, 0);
  let sum2 = queue2.reduce((a, b) => a + b, 0);

  if (sum1 === sum2) return 0;

  const total = sum1 + sum2;

  if (total % 2 !== 0) return -1;

  const target = total / 2;

  let p1 = 0,
    p2 = 0;
  let count = 0;
  let combinedQueue = [...queue1, ...queue2];

  while (
    p1 < queue1.length + queue2.length &&
    p2 < queue1.length + queue2.length
  ) {
    if (sum1 === target) return count;

    if (sum1 > target) {
      sum1 -= combinedQueue[p1];
      p1++;
    } else {
      sum1 += combinedQueue[p2 + queue1.length];
      p2++;
    }
    count++;
  }

  return -1;
}

console.log(solution([1, 2, 1, 2], [1, 10, 1, 2]));
