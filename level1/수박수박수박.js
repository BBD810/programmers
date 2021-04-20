// 2021.04.20 해결
function solution(n) {
	var answer = '';
	var arr = [];
	for (i = 0; i < n; i++) {
		if (i % 2 === 0) {
			arr.push('수');
		} else {
			arr.push('박');
		}
	}
	arr = arr.join('');

	console.log(arr);
}
solution(11);
