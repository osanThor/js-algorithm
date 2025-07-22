function solution(cacheSize, cities) {
  let time = 0;
  const cache = [];

  for (let city of cities) {
    city = city.toLowerCase();

    const index = cache.indexOf(city);

    if (index !== -1) {
      cache.splice(index, 1);
      cache.push(city);
      time += 1;
    } else {
      if (cacheSize > 0 && cache.length >= cacheSize) {
        cache.shift();
      }
      if (cacheSize > 0) {
        cache.push(city);
      }
      time += 5;
    }
  }

  return time;
}

console.log(
  solution(3, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
  ])
);
