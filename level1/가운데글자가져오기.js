// 2021.04.19 해결

// 단어 s의 가운데 글자를 반환하는 함수를 만들기
// 단어의 길이가 짝수면 가운데 두 글자를 반환

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
