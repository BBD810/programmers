// 2021.04.21 해결

function solution(arr) {
	var answer = 0;
	for (var i = 0; i < arr.length; i++) {
		answer += arr[i];
	}
	return answer / arr.length;
}
solution([1, 2, 3, 4]);
