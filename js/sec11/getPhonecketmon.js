function solution(nums) {
  let answer = 0,
    max = nums.length / 2;
  const newArr = [...new Set(nums)];
  if (newArr.length > max) answer = max;
  else answer = newArr.length;
  return answer;
}

const arr = [3, 1, 2, 3];
console.log(solution(arr));
