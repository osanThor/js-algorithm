function solution(v) {
  let answer = [];
  const xArr = v.map((el) => el[0]);
  const yArr = v.map((el) => el[1]);
  const x = xArr.filter((el) => xArr.indexOf(el) === xArr.lastIndexOf(el))[0];
  const y = yArr.filter((el) => yArr.indexOf(el) === yArr.lastIndexOf(el))[0];
  answer.push(x, y);
  return answer;
}
const arr = [
  [1, 4],
  [3, 4],
  [3, 10],
];
console.log(solution(arr));
