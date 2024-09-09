function solution(arr) {
  let xArr = [],
    yArr = [];
  for (let i = 0; i < arr.length; i++) {
    const x = arr[i][0];
    const y = arr[i][1];
    xArr.push(x);
    yArr.push(y);
  }
  const xFilter = xArr.filter(
    (num) => xArr.indexOf(num) === xArr.lastIndexOf(num)
  );
  const yFilter = yArr.filter(
    (num) => yArr.indexOf(num) === yArr.lastIndexOf(num)
  );
  return [...xFilter, ...yFilter];
}
