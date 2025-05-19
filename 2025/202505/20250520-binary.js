function solution(s) {
  let count1 = 0,
    count2 = 0,
    temp = s;
  while (temp.length > 1) {
    const newArr = temp
      .split("")
      .filter((a) => a !== "0")
      .join("");
    count1++;
    count2 += temp.length - newArr.length;
    temp = newArr.length.toString(2);
  }
  return [count1, count2];
}

console.log(solution("110010101001"));
