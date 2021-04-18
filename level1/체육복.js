// n = 전체 학생의 수
// lost = 잃어버린 학생의 번호가 담긴 배열
// reserve = 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열

// 1. 뒷번호의 학생이 앞번호의 학생에게 빌려주는 경우
// if 잃어버린 학생이  lost에 포함되어 있고 , 뒷번호의 학생이 reserve 에 포함되어 있으면 -> answer에 옮겨주고 lost 삭제 reserve 삭제
// 출력은 answer.length
// answer.length

var answer = []; //answer = 체육복을 입을 수 있는 애들
function solution(n, lost, reserve) {
	for (var x = 0; x < lost.length; x++) {
		for (var y = 0; y < reserve.length; y++) {
			if (lost[x] === reserve[y]) {
				// answer.push(lost[x]);
				lost.splice(x, 1);
				reserve.splice(y, 1);
				x = 0;
				y = -1;
			}
		}
	}
	// console.log('answer', answer, 'lost', lost, 'reserve', reserve);
	for (var i = 0; i < lost.length; i++) {
		if (reserve.includes(lost[i] + 1)) {
			continue;
		} else {
			n -= 1;
		}


}
// solution(5, [2, 4], [1, 3, 5]);
// solution(7, [1, 2, 3, 4, 6, 7], [1, 2, 3]);
solution(10, [1, 3, 5, 7, 8, 9], [2, 5, 8]);
