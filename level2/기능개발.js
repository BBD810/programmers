// 2021.04.26 해결

function solution(progresses, speeds) {
	var answer = [];
	var count = 0;
	while (progresses.length !== 0) {
		for (var i = 0; i < progresses.length; i++) {
			progresses[i] += speeds[i];
		}
		// console.log('progresses =', progresses);

		while (progresses[0] >= 100) {
			progresses.shift();
			speeds.shift();
			count++;
		}
		if (count === 0) {
			continue;
		} else {
			answer.push(count);
			count = 0;
		}

		console.log('progresses =', progresses, 'speeds =', speeds);
		console.log('answer =', answer);
	}
}
// solution([93, 30, 55], [1, 30, 5]);
solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]);

// progresses의 각 요소에 반복문이 실행될 때마다 speeds를 더함, count++
// progresses의 각 요소들이 100이 넘어가면 true로 바꿔줌
// 밑에 새로운 반복문에 첫번째 요소부터 검사해서 true가 있으면 true의 갯수만큼 shift
