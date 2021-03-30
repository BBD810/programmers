function solution(answers) {
	// % 를 사용
	var answer = [];
	var answers1 = [1, 2, 3, 4, 5];
	var answers2 = [2, 1, 2, 3, 2, 4, 2, 5];
	var answers3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
	var score1 = [];
	var score2 = [];
	var score3 = [];
	// answers[1,3,2,4,2]
	for (var i = 0; i < answers.length + 1; i++) {
		if (answers[i] === answers1[i % 5]) {
			score1.push('correct');
		}
		if (answers[i] === answers2[i % 8]) {
			score2.push('correct');
		}
		if (answers[i] === answers3[i % 10]) {
			score3.push('correct');
		}
	}
	// console.log(score1, score2, score3);
	var max = Math.max(score1.length, score2.length, score3.length);
	if (max === score1.length) {
		// if (max === score2.length && max === score3.length) {
		// answer.push(1, 2, 3);
		// }
		if (max === score2) {
			answer.push(1, 2);
		} else if (max === score3) {
			answer.push(1, 3);
		} else {
			answer.push(1);
		}
	}
	if (max === score2.length) {
		// if (max === score1.length && max === score3.length) {
		// 	answer.push(1, 2, 3);
		// }
		if (max === score1) {
			answer.push(1, 2);
		} else if (max === score3) {
			answer.push(2, 3);
		} else {
			answer.push(2);
		}
	}
	if (max === score3.length) {
		// if (max === score1.length && max === score2.length) {
		// answer.push(1, 2, 3);
		// }
		if (max === score1) {
			answer.push(1, 3);
		} else if (max === score2) {
			answer.push(2, 3);
		} else {
			answer.push(3);
		}
	}
	console.log(answer, max, score1.length, score2.length, score3.length);
	// console.log();
	return answer;
}
solution([1, 2, 3, 4, 5]);
solution([1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]);
solution([2, 1, 2, 3, 2, 4, 2, 5, 2, 1]);
solution([3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 1, 2, 4, 5, 1, 2]);
solution([1, 3, 2, 4, 2]);
