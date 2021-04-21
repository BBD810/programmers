function solution(n) {
	var answer = 0;
	var check = true;
	for (var i = 1; i < n + 1; i++) {
		loop: for (var j = 2; j < n + 1; j++) {
			if (i % j === 0) {
				check = false;
				break loop;
			}
		}
		console.log(check);
	}
	if (check === true) {
		answer++;
	}
	console.log(answer);
}
solution(10);
solution(5);
