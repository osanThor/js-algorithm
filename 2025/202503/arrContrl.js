function solution(arr) {
  arr = [...new Set(arr)];
  arr.sort((a, b) => b - a);
  return arr;
}

console.log(solution([2, 1, 1, 3, 2, 5, 4]));
