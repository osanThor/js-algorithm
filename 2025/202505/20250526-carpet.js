function solution(brown, yellow) {
  const total = brown + yellow;

  for (let height = 3; height <= Math.sqrt(total); height++) {
    const width = total / height;

    if (Number.isInteger(width) && width >= height) {
      const innerWidth = width - 2;
      const innerHeight = height - 2;
      const innerArea = innerWidth * innerHeight;

      if (innerArea === yellow) {
        return [width, height];
      }
    }
  }
}
