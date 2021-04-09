function solution(arr) {
	var answer = [];
	for (var i = 0; i < arr.length; i++) {
		// answer[answer.length-1] 개념 알아두기
		if (answer[answer.length - 1] === arr[i]) {
		} else {
			answer.push(arr[i]);
		}
	}
	console.log(answer);
}
solution([4, 4, 4, 3, 3]);
solution([1, 1, 3, 3, 0, 1, 1]);
solution([1, 1, 1, 1]);
