function solution(data, col, row_begin, row_end) {
  let answer = 0;
  const sort = data.sort((a, b) => {
    if (a[col - 1] === b[col - 1]) {
      return b[0] - a[0];
    } else {
      return a[col - 1] - b[col - 1];
    }
  });
  for (let i = row_begin - 1; i < row_end; i++) {
    const target = sort[i];
    let sum = 0;
    for (let j = 0; j < target.length; j++) {
      sum += target[j] % (i + 1);
    }
    answer ^= sum;
  }
  return answer;
}

const arr = [
  [2, 2, 6],
  [1, 5, 10],
  [4, 2, 9],
  [3, 8, 3],
];
console.log(solution(arr, 2, 2, 3));
