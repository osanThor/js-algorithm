function solution(arr1, arr2) {
  const l1 = arr1.length;
  const c1 = arr1[0].length;
  const l2 = arr2.length;
  const c2 = arr2[0].length;

  const answer = [];
  for (let i = 0; i < l1; i++) {
    answer.push(new Array(c2).fill(0));
  }

  for (let i = 0; i < l1; i++) {
    for (let j = 0; j < c2; j++) {
      for (let k = 0; k < c1; k++) {
        answer[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }

  return answer;
}

console.log(
  solution(
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ],
    [
      [3, 3],
      [3, 3],
    ]
  )
);
