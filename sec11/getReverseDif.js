function solution(s) {
  const answer = s.split("").map((str, idx) => {
    const lastIndex = s.lastIndexOf(str, idx - 1);
    console.log(idx, lastIndex);
    return lastIndex <= 0 ? -1 : idx - lastIndex;
  });

  return answer;
}
