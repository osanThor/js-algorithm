function solution(n, words) {
  const usedWords = new Set();
  for (let i = 0; i < words.length; i++) {
    const current = words[i];
    const prev = words[i - 1];

    const isUsed = usedWords.has(current);
    const isNotChained = i > 0 && prev[prev.length - 1] !== current[0];

    if (current.length === 1 || isUsed || isNotChained) {
      const player = (i % n) + 1;
      const turn = Math.floor(i / n) + 1;
      return [player, turn];
    }

    usedWords.add(current);
  }

  return [0, 0];
}
