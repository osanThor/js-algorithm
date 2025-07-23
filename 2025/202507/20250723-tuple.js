function solution(s) {
  const sets = s.slice(2, -2).split("},{");

  sets.sort((a, b) => a.length - b.length);

  const result = [];
  const seen = new Set();

  for (let set of sets) {
    const numbers = set.split(",").map(Number);

    for (let num of numbers) {
      if (!seen.has(num)) {
        seen.add(num);
        result.push(num);
      }
    }
  }

  return result;
}

console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}"));
