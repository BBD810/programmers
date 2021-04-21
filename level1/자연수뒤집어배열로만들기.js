// 2021.04.21 해결
function solution(n) {
	var answer = '';
	var result = [];
	var a = String(n);
	a = a.split('');
	a.reverse();

	for (var i = 0; i < a.length; i++) {
		a[i] = parseInt(a[i]);
	}
	return a;
}
solution(12345);
