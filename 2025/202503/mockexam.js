function solution(arr) {
  const answers = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  const scores = [0, 0, 0];

  for (const [i, answer] of arr.entries()) {
    for (const [j, v] of answers.entries()) {
      if (answer === v[i % v.length]) {
        scores[j] += 1;
      }
    }
  }

  const maxScore = Math.max(...scores);

  const answer = [];
  for (let i = 0; i < scores.length; i++) {
    if (maxScore === scores[i]) answer.push(i + 1);
  }
  return answer;
}
console.log(solution([1, 2, 3, 4, 5]));
