function solution(want, number, discount) {
  let count = 0;

  for (let i = 0; i <= discount.length - 10; i++) {
    const window = discount.slice(i, i + 10);
    const map = new Map();

    for (const item of window) {
      map.set(item, (map.get(item) || 0) + 1);
    }

    let match = true;
    for (let j = 0; j < want.length; j++) {
      if (map.get(want[j]) !== number[j]) {
        match = false;
        break;
      }
    }

    if (match) count++;
  }

  return count;
}
