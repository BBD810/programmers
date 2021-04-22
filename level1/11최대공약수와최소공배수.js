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
	var basket = [];
	for (var i = 1; i < n + 1; i++) {
		if (m % i === 0) {
			basket.push(i);
		}
	}
	// console.log(basket);
	// console.log(max);
	answer.push(basket.pop());
	answer.push((n * m) / answer[0]);
	console.log(answer);
}
solution(3, 12);
solution(1, 10);
