//  Lv.1 비밀지도
// function solution(n, arr1, arr2) {
//   let answer = [];
//   const binaryArr1 = arr1.map((num) => num.toString(2).padStart(n, "0"));
//   const binaryArr2 = arr2.map((num) => num.toString(2).padStart(n, "0"));

//   for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j < n; j++) {
//       row +=
//         binaryArr1[i][j] === "1" && binaryArr2[i][j] === "1"
//           ? "#"
//           : binaryArr1[i][j] === "1" || binaryArr2[i][j] === "1"
//           ? "#"
//           : " ";
//     }
//     answer.push(row);
//   }
//   return answer;
// }
function solution(n, arr1, arr2) {
  let answer = [];
  const binaryArr1 = arr1.map((num) => num.toString(2).padStart(n, "0"));
  const binaryArr2 = arr2.map((num) => num.toString(2).padStart(n, "0"));

  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row +=
        binaryArr1[i][j] === "1" && binaryArr2[i][j] === "1"
          ? "#"
          : binaryArr1[i][j] === "1" || binaryArr2[i][j] === "1"
          ? "#"
          : " ";
    }
    answer.push(row);
  }
  return answer;
}
console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));
