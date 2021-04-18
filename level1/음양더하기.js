// 2021.04.18 해결

function solution(absolutes, signs) {
	var answer = 0;
	for (i = 0; i < absolutes.length + 1; i++) {
		if (signs[i] === true) {
			answer += absolutes[i];
		} else if (signs[i] === false) {
			answer -= absolutes[i];
		}
	}
	return answer;
	console.log(answer);
}
solution([4, 7, 12], [true, false, true]);
