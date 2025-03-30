function solution(arr) {
  const answer = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      answer.push(arr[i] + arr[j]);
    }
  }
  return [...new Set(answer)].sort((a, b) => a - b);
}

console.log(solution([2, 1, 3, 4, 1]));
