// n = 전체 학생의 수
// lost = 잃어버린 학생의 번호가 담긴 배열
// reserve = 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열

var answer = []; //answer = 체육복을 입을 수 있는 애들
function solution(n, lost, reserve) {
	for (var x = 0; x < lost.length; x++) {
		for (var y = 0; y < reserve.length; y++) {
			if (lost[x] === reserve[y]) {
				lost[x] = false;
				reserve[y] = false;
			}
		}
	}
	// console.log('lost:', lost, 'reserve:', reserve);
	// ----- 중복제거 --- //
	for (var i = 0; i < lost.length; i++) {
		if (lost[i] === false) {
			continue;
		}
		if (reserve.includes(lost[i] - 1)) {
			let idx = reserve.indexOf(lost[i] - 1);
			lost[i] = false;
			reserve[idx] = false;
			continue;
		}
		if (reserve.includes(lost[i] + 1)) {
			let idx1 = reserve.indexOf(lost[i] + 1);
			lost[i] = false;
			reserve[idx1] = false;
			continue;
		}
		n -= 1;
	}
	return n;
	console.log(n);
}
// solution(5, [2, 4], [1, 3, 5]);
solution(9, [1, 2, 3, 4, 6, 8], [1, 2, 3, 7, 9]);
// solution(10, [1, 3, 5, 7, 8, 9], [2, 5, 8]);
