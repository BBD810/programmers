// 2021.04.20 해결
// array의 각 element 중 divisor 로 나누어 떨어지는 값을 오름차순으로 정렬
// divisor로 나누어 떨어지는 element가 하나도 없으면 [-1] 반환

function solution(arr, divisor) {
	var answer = [];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] % divisor === 0) {
			answer.push(arr[i]);
		}
	}
	answer.sort(function (a, b) {
		if (a > b) return 1;
		if (a === b) return 0;
		if (a < b) return -1;
	});
	if (answer.length === 0) {
		return [-1];
	}
	console.log(answer);
}
solution([5, 9, 7, 10], 5);
// solution([2, 36, 1, 3], 1);
