function solution(movie) {
  const countMap = {};

  for (let m of movie) {
    countMap[m] = (countMap[m] || 0) + 1;
  }

  return Object.entries(countMap)
    .sort((a, b) => (b[1] !== a[1] ? b[1] - a[1] : a[0].localeCompare(b[0])))
    .map(([movie]) => movie);
}

const movies = [
  "Avatar",
  "Avengers",
  "Avatar",
  "Oppenheimer",
  "Avengers",
  "Avatar",
];
console.log(solution(movies));
