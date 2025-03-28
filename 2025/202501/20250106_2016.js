function solution(a, b) {
  const lastDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const days = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  let total = 0;

  for (let i = 0; i < a - 1; i++) total += lastDays[i];

  total += b - 1;

  return days[total % 7];
}
