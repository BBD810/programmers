function solution(n) {
	var answer = 0;
	var arr = [];
	for (var i = 1; i <= n; i++) {
		if (n % i == 0) {
			arr.push(i);
		}
	}
	for (var i = 0; i < arr.length; i++) {
		answer += arr[i];
	}
	console.log(answer);
	// return answer;
}
solution(5);
