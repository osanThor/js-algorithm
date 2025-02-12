function solution(jobs) {
  jobs.sort((a, b) => a[0] - b[0]); // 요청 시간 기준으로 정렬

  let totalTime = 0; // 전체 요청의 총 반환 시간
  let currentTime = 0; // 현재 시각
  let index = 0; // jobs 배열 인덱스
  let count = jobs.length;

  const minHeap = []; // 우선순위 큐 (소요 시간이 짧은 작업이 먼저 처리됨)

  while (index < count || minHeap.length > 0) {
    // 현재 시간 기준으로 실행할 수 있는 작업을 minHeap에 추가
    while (index < count && jobs[index][0] <= currentTime) {
      minHeap.push(jobs[index]);
      minHeap.sort((a, b) => a[1] - b[1]); // 소요 시간이 짧은 작업이 먼저 오도록 정렬
      index++;
    }

    if (minHeap.length > 0) {
      let [requestTime, duration] = minHeap.shift(); // 가장 짧은 작업 선택
      currentTime += duration; // 작업 수행
      totalTime += currentTime - requestTime; // 반환 시간 누적
    } else {
      // 작업이 없는 경우, 다음 요청 시간으로 점프
      currentTime = jobs[index][0];
    }
  }

  return Math.floor(totalTime / count); // 평균 반환 시간의 정수 부분 반환
}

console.log(
  solution([
    [0, 3],
    [1, 9],
    [3, 5],
  ])
);
