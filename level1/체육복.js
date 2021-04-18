// n = 전체 학생의 수
// lost = 잃어버린 학생의 번호가 담긴 배열
// reserve = 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열

// 1. 뒷번호의 학생이 앞번호의 학생에게 빌려주는 경우
// if 잃어버린 학생이  lost에 포함되어 있고 , 뒷번호의 학생이 reserve 에 포함되어 있으면 -> answer에 옮겨주고 lost 삭제 reserve 삭제
// 출력은 answer.length
// answer.length

var answer = []; //answer = 체육복을 입을 수 있는 애들
function solution(n, lost, reserve) {
	var cross = [];
	for (x = 0; x < lost.length; x++) {
		for (y = 0; y < reserve.length; y++) {
			if (lost[x] === reserve[y]) {
				cross.push(lost[x]);
			}
		}
	}
	// console.log(cross);

	var self = n - lost.length - reserve.length + cross.length;
	for (var i = 0; i < 10; i++) {
		//i = 잃어버린 ( 앞)
		if (lost.includes(i) && reserve.includes(i + 1)) {
			answer.push(i);
		} else {
			// console.log('hi');
		}
	}
	console.log(self);
	// console.log(answer);
}
// solution(5, [2, 4], [1, 3, 5]);
solution(7, [1, 2, 3, 4, 6, 7], [1, 2, 3]);
