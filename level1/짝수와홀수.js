// 2021.04.21 해결

function solution(num) {
	var answer = '';
	if (num % 2 === 0) {
		answer = 'Even';
	} else {
		answer = 'Odd';
	}
	return answer;
}
solution(3);
solution(4);
