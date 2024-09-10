function solution(str) {
  return str
    .split(" ")
    .map((word) => {
      return word
        .split("")
        .map((char, index) => {
          return index % 2 === 0 ? char.toLowerCase() : char.toUpperCase();
        })
        .join("");
    })
    .join(" ");
}
