function solution(clothes) {
  const clothesMap = new Map();

  clothes.forEach(([name, type]) => {
    clothesMap.set(type, (clothesMap.get(type) || 0) + 1);
  });

  let totalCombinations = 1;
  for (let count of clothesMap.values()) {
    totalCombinations *= count + 1;
  }

  return totalCombinations - 1;
}
