// 2021.04.20 해결

function solution(d, budget) {
	var answer = 0;
	d.sort((a, b) => a - b);
	for (var i = 0; i < d.length; i++) {
		if (d[i] === budget || d[i] < budget) {
			budget -= d[i];
			answer += 1;
		} else if (d[i] > budget) {
			return answer;
		}
	}
	return answer;
}
solution([1, 3, 2, 5, 4], 9);

// 최도영코드
// function solution(d, budget) {
// 	var answer = 0;
// 	var count = 0;
// 	d.sort((a, b) => a - b);

// 	for (var i = 0; i < d.length; i++) {
// 		if (d[i] <= budget) {
// 			budget -= d[i];
// 			count++;
// 		}
// 	}

// 	return count;
// }
