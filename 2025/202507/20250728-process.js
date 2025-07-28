function solution(priorities, location) {
  let queue = priorities.map((priority, index) => ({
    priority: priority,
    isTarget: index === location,
  }));

  let order = 0;

  while (queue.length > 0) {
    let current = queue.shift();

    let has = queue.some((process) => process.priority > current.priority);

    if (has) {
      queue.push(current);
    } else {
      order++;
      if (current.isTarget) {
        return order;
      }
    }
  }
}

console.log(solution([2, 1, 3, 2], 2));
