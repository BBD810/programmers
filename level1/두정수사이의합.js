function solution(a, b) {
	if (a === b) {
		return a;
	}
	var big;
	var small;

	var answer = 0;
	if (a > b) {
		big = a;
		small = b;
	} else {
		big = b;
		small = a;
	}
	for (i = small; i <= big; i++) {
		answer += i;
	}
	console.log(answer);
}
solution(9, 5);
