function solution(edges) {
  const inCount = {};
  const outCount = {};

  for (const [a, b] of edges) {
    outCount[a] = (outCount[a] || 0) + 1;
    inCount[b] = (inCount[b] || 0) + 1;

    if (!(a in inCount)) inCount[a] = 0;
    if (!(b in outCount)) outCount[b] = 0;
  }

  let totalCount = 0;
  let stickCount = 0;
  let eightCount = 0;

  for (const prop in inCount) {
    const i = inCount[prop];
    const o = outCount[prop];

    if (i === 0 && o >= 2) {
      totalCount = Number(prop);
    } else if (o === 0) {
      stickCount += 1;
    } else if (i >= 2 && o >= 2) {
      eightCount += 1;
    }
  }

  const donutCount = outCount[totalCount] - (stickCount + eightCount);

  return [totalCount, donutCount, stickCount, eightCount];
}

// function solution(edges) {
//   const answer = Array(4).fill(0);
//   const counter = edges.reduce((res, edge) => {
//     const [a, b] = edge;

//     if (!res[a]) {
//       res[a] = [0, 1];
//     } else {
//       res[a][1] += 1;
//     }

//     if (!res[b]) {
//       res[b] = [1, 0];
//     } else {
//       res[b][0] += 1;
//     }

//     return res;
//   }, {}); // [in, out]
//   // 생성한 정점: in === 0 && out >= 2
//   // 막대 모양: out === 0
//   // 8자 모양: in >= 2 && out >= 2
//   // 도넛 모양: 생성한 생성의 out개수 - (막대 모양 개수 + 8자 모양 개수)
//   for (const node in counter) {
//     const [i, o] = counter[node];

//     if (i === 0 && o >= 2) {
//       answer[0] = +node;
//     }
//     if (o === 0) {
//       answer[2] += 1;
//     }
//     if (i >= 2 && o >= 2) {
//       answer[3] += 1;
//     }
//   }
//   answer[1] = counter[answer[0]][1] - (answer[2] + answer[3]);

//   return answer;
// }

const edges = [
  [2, 3],
  [4, 3],
  [1, 1],
  [2, 1],
];

console.log(solution(edges));
