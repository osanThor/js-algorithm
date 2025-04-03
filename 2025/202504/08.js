function solution(s) {
  const answer = [];
  for (let x of s) {
    if (x === "(") {
      answer.push(x);
    } else if (x === ")") {
      if (!answer.length) return false;
      else answer.pop();
    }
  }
  return answer.length === 0;
}

console.log(solution("(())()"));
