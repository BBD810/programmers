function solution(s) {
	var a = s.split('');
	var answer = [];
	if (a.length % 2 === 0) {
		answer.push(a[a.length / 2 - 1]);
		answer.push(a[a.length / 2]);
	} else {
		answer.push(a[Math.floor(a.length / 2)]);
	}
	return console.log(answer.join(''));
}

solution('abce');
solution('abcdefg');
