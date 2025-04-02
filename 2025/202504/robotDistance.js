function solution(dirs) {
  const dists = { U: [0, 1], L: [-1, 0], R: [1, 0], D: [0, -1] };
  const pos = [0, 0];
  const visted = new Set();

  for (const x of dirs) {
    const newX = pos[0] + dists[x][0];
    const newY = pos[1] + dists[x][1];
    if (newX < -5 || newX > 5 || newY < -5 || newY > 5) continue;
    const newPos = `${pos[0]}:${pos[1]},${newX}:${newY}`;
    const reNewPos = `${newX}:${newY},${pos[0]}:${pos[1]}`;

    visted.add(newPos);
    visted.add(reNewPos);
    pos[0] = newX;
    pos[1] = newY;
  }

  return visted.size / 2;
}

console.log(solution("LULLLLLLU"));
