// 주어진 숫자 중 3개의 수를 더해서 소수가 되는 경우의 갯수를 구하기

function solution(num) {
	var answer = 0;
	var result = [];
	for (var i = 0; i < num.length - 2; i++) {
		for (var j = i + 1; j < num.length - 1; j++) {
			for (var k = j + 1; k < num.length; k++) {
				result.push(num[i] + num[j] + num[k]);
			}
		}
	}
	// console.log('result', result);

	for (var x = 0; x < result.length; x++) {
		var check = true;
		loop: for (var y = 2; y < result[x]; y++) {
			if (result[x] % y === 0) {
				check = false;
				break loop;
			}
		}
		if (check === true) {
			answer++;
		}
	}

	console.log(answer);
}
solution([1, 2, 3, 5, 6, 7]);
solution([15, 23, 46, 37, 27]);
