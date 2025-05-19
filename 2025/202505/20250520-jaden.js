function solution(s) {
  const sArr = s.split(" ");

  return sArr
    .map((char) =>
      char
        .split("")
        .map((c, i) => (i === 0 ? c.toUpperCase() : c.toLowerCase()))
        .join("")
    )
    .join(" ");
}

console.log(solution("3people unFollowed me"));
