function solution(k, dungeons) {
  let answer = 0;

  function explore(currentFatigue, clearedCount) {
    if (clearedCount > answer) {
      answer = clearedCount;
    }

    for (let i = 0; i < dungeons.length; i++) {
      if (dungeons[i] !== null) {
        const [minNeed, cost] = dungeons[i];

        if (currentFatigue >= minNeed) {
          const temp = dungeons[i];
          dungeons[i] = null;

          explore(currentFatigue - cost, clearedCount + 1);

          dungeons[i] = temp;
        }
      }
    }
  }

  explore(k, 0);

  return answer;
}

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
);
