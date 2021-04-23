// 두 수 n, m 을 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수를 만들기
// 배열의 앞에는 최대공약수, 뒤에는 최소공배수를 넣어서 반환하면 됨

// function solution(n, m) {
// 	var answer = [];
// 	for (var i = 1; i < n + 1; i++) {
// 		if (m % n === 0) {
// 			answer.push(i);
// 		}
// 	}
// 	answer.splice(0, answer.length - 1);
// 	answer.push((n * m) / answer[0]);
// 	console.log(answer);
// }
// solution(3, 12);
// solution(1, 10);

function solution(n, m) {
	var answer = [];
	var big;
	var small;
	if (n >= m) {
		big = n;
		small = m;
	} else {
		big = m;
		small = n;
	}
	//GCD (최대공약수) 구하는 함수
	function getGCD(_small, _big) {
		var r;
		while (r !== 0) {
			r = _big % _small; //r=8
			_big = _small; //
			if (r !== 0) {
				_small = r;
			}
		}
		answer.push(_small);
	}
	getGCD(small, big);
	// LCM (최소공배수) = n * m / GCD
	answer.push((n * m) / answer[0]);
	console.log(answer);
}
solution(3, 12);
// solution(1, 10);
// solution(15, 16);
