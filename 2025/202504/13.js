function solution(board, moves) {
  let count = 0;
  const stack = [];

  for (let col of moves) {
    col--;
    let row = 0;
    while (row < board.length) {
      if (board[row][col] !== 0) {
        const pick = board[row][col];
        board[row][col] = 0;
        if (pick === stack[stack.length - 1]) {
          stack.pop();
          count += 2;
        } else stack.push(pick);
        break;
      }
      row++;
    }
  }
  return count;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
