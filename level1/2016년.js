// 2016년 a월 b일은 무슨 요일일까?
// 두 수 a, b를 입력받아 무슨 요일인지 리턴하는 함수를 완성하기
// 2016년은 윤년이다(2월29일까지), 1월1일은 금요일부터 시작
// SUN, MON, TUE, WED, THU, FRI, SAT

var day = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];
var month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var result = 0;
var answer;
var i;
var j;
function solution(a, b) {
	if (a === 1) {
	}
	if (1 < a && a < 13) {
		for (var i = 1; i < 12; i++) {
			result += month[i - 1];
			if (a === i + 1) {
				break;
			}
		}
	}
	result += b;
	console.log(result);

	for (var j = 0; j < 7; j++) {
		if (result % 7 === j) {
			answer = day[j];
		}
	}
	return answer;
	// console.log('result', result);
	console.log(a, '월', b, '일은', answer, '요일입니다');
}
solution(1, 8);
// solution(11, 29);
// solution(7, 30);
// solution(7, 3);
// solution(8, 10);
