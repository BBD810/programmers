// 2021.04.23 해결

function solution(n) {
	var answer = 0;
	n = String(n);
	n = n.split('');
	n = n.sort(function (a, b) {
		return b - a;
	});
	n = n.join('');
	n = Number(n);
	console.log(n);
}
solution(118372);
