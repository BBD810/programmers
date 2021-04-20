// 2021.04.20 해결

function solution(s) {
	var answer = '';
	var arr = s.split('');
	arr.sort();
	arr.reverse();
	arr = arr.join('');

	console.log(arr);
}
solution('Zbcdefg');
// solution('atdhAgvRa');
