// 2021.04.21 해결
// Math.sqrt(n) => n제곱근의 제곱근 출력
// Math.pow(n,a) => n의 a제곱 출력
function solution(n) {
	var answer = 0;

	var a = Math.sqrt(n); 

	if (Number.isInteger(Math.sqrt(n)) === false) {
		answer -= 1;
	} else {
		answer += Math.pow(a + 1, 2);
	}
	return answer;
}
solution(36);
solution(3);
// Number.isInteger;
