// 2021.04.20 해결
// 대문자와 섞여있는 문자열 s에서 'p'와 'y'의 갯수를 비교,
// 같으면 true 출력, 다르면 false 출력

function solution(s) {
	var a = [];
	var b = [];
	var arr = s.split('');
	console.log(arr);
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === 'p' || arr[i] === 'P') {
			a.push(arr[i]);
		} else if (arr[i] === 'y' || arr[i] === 'Y') {
			b.push(arr[i]);
		}
	}
	console.log('a', a, 'b', b);

	if (a.length === b.length) {
		return true;
	} else {
		return false;
	}
}

solution('pPoooyY');
// solution('Pyy');
