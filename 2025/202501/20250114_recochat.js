// Lv2 리코쳇
function solution(board) {
  const rows = board.length;
  const cols = board[0].length;

  const directions = [
    [0, 1], // 오른쪽
    [0, -1], // 왼쪽
    [1, 0], // 아래
    [-1, 0], // 위
  ];

  let start = null;
  let goal = null;

  // 시작 위치(R)와 목표 위치(G) 찾기
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (board[r][c] === "R") start = [r, c];
      if (board[r][c] === "G") goal = [r, c];
    }
  }

  // BFS 탐색
  const queue = [[...start, 0]]; // [행, 열, 이동 횟수]
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
  visited[start[0]][start[1]] = true;

  while (queue.length > 0) {
    const [curRow, curCol, moves] = queue.shift();

    // 목표 위치 도달 확인
    if (curRow === goal[0] && curCol === goal[1]) {
      return moves;
    }

    // 4방향으로 이동
    for (const [dRow, dCol] of directions) {
      let newRow = curRow;
      let newCol = curCol;

      // 장애물이나 끝에 도달할 때까지 이동
      while (
        newRow + dRow >= 0 &&
        newRow + dRow < rows &&
        newCol + dCol >= 0 &&
        newCol + dCol < cols &&
        board[newRow + dRow][newCol + dCol] !== "D"
      ) {
        newRow += dRow;
        newCol += dCol;
      }

      // 이미 방문한 위치인지 확인
      if (!visited[newRow][newCol]) {
        visited[newRow][newCol] = true;
        queue.push([newRow, newCol, moves + 1]);
      }
    }
  }

  // 목표 위치에 도달할 수 없는 경우
  return -1;
}

console.log(solution([".D.R", "..G.", "..D.", "...D"]));
