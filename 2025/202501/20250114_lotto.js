// Lv1 로또 최고 순위 최저 순위
function solution(lottos, win_nums) {
  const min = lottos.filter((num) => win_nums.includes(num)).length;
  const zero = lottos.filter((num) => !num).length;
  const max = zero + min;
  return [!!max ? 7 - max : 6, !!min ? 7 - min : 6];
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
