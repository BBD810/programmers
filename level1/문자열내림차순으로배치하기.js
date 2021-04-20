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
