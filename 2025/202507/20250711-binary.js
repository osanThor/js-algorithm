function solution(s) {
  let count1 = 0,
    count2 = 0;
  let temp = s;
  while (temp !== "1") {
    const convertZero = temp.replaceAll("0", "");
    count2 += temp.length - convertZero.length;
    temp = convertZero.length.toString(2);
    console.log(temp, convertZero);
    count1++;
  }
  return [count1, count2];
}

console.log(solution("110010101001"));
