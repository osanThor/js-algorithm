function solution(wallpaper) {
  let lux = [],
    luy = [],
    rbx = [],
    rby = [];

  wallpaper.forEach((str, idx) => {
    str.split("").forEach((char, index) => {
      if (char === "#") {
        lux.push(idx);
        luy.push(index);
        rbx.push(idx + 1);
        rby.push(index + 1);
      }
    });
  });
  return [
    Math.min(...lux),
    Math.min(...luy),
    Math.max(...rbx),
    Math.max(...rby),
  ];
}
const wallpaper = [".#...", "..#..", "...#."];
const wallpaper2 = [
  "..........",
  ".....#....",
  "......##..",
  "...##.....",
  "....#.....",
];

console.log(solution(wallpaper2));
