function solution(s, n) {
	var answer = [];
	var big = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	var small = 'abcdefghijklmnopqrstuvwxyz';
	big = big.split('');
	small = small.split('');
	s = s.split('');
	// console.log('big:', big, 'small', small);
	for (var k = 0; k < s.length; k++) {
		for (var i = 0; i < big.length; i++) {
			if (big.includes(s[k]) && s[k] === big[i]) {
				answer.push(big[i + n]);
			}
		}
		for (var j = 0; j < small.length; j++) {
			if (small.includes(s[k]) && s[k] === small[j]) {
				answer.push(small[j + n]);
			}
		}
	}
	answer = answer.join('');
	// console.log('s =', s, 'big', big);
	console.log('answer =', answer);
}
solution('AB', 1);
solution('z,1');
solution('a B z', 2);

// 테스트 1과 3을 비교해보고 join을 할 때 공백도 신경써야함.
