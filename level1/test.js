function solution(n) {
	answer = 0;
	n = String(n);
	n = n.split('');
	for (var i = 0; i < n.length; i++) {
		n[i] = Number(n[i]);
		answer += n[i];
	}
}
solution(123);
