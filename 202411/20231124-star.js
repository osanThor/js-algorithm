// function solution(str) {
//   const [n, m] = str.split(" ").map(Number);
//   const row = Array(n).fill("*").join("") + "\n";
//   return Array(m).fill(row).join("");
// }
// function solution(str) {
//   const [n, m] = str.split(" ").map(Number);
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < m; j++) {
//       document.write("*");
//     }
//     document.write("<br>");
//   }
// }
// console.log(solution("5 3"));

process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const [n, m] = data.split(" ").map(Number);

  for (let i = 0; i < m; i++) {
    let stars = "";
    for (let j = 0; j < n; j++) {
      stars += "*";
    }
    console.log(stars);
  }
});
