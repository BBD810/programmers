function solution(num) {
	var sum = [];
	var lastAnswer = [];
	for (var i = 0; i < num.length; i++) {
		for (var j = 0; j < num.length; j++) {
			for (var k = 0; k < num.length; k++) {
				sum.push(num[i] + num[j] + num[k]);
			}
		}
	}

	var answer = [];
	var result = [];
	for (var a = 0; a < 1001; a++) {
		answer.push(a);
	}

	for (var b = 0; b < 2; b++) {
		answer[b] = false;
	}

	for (var i = 2; i < 10; i++) {
		for (var j = 1; i * j < 3000; j++) {
			if (j === 1) {
				answer[j] = false;
			} else if (j > 1) {
				answer[i * j] = false;
			}
		}
	}
	for (var k = 0; k < 3000; k++) {
		if (answer[k] === true || answer[k] === false) {
			continue;
		} else {
			result.push(answer[k]);
		}
	}

	for (var x = 0; x < sum.length; x++) {
		for (var y = 0; y < answer.length; y++) {
			if (sum[x] === answer[y]) {
				lastAnswer.push(sum[x]);
			}
		}
	}
	return lastAnswer.length;
}
