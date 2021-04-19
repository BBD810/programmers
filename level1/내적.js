// 2021.04.19 해결

function solution(a, b) {
	var answer = 0;
	for (var i = 0; i < a.length; i++) {
		answer += a[i] * b[i];
	}
	console.log(answer);
}
solution([1, 2, 3, 4], [-3, -1, 0, 2]);
