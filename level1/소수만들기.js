// 주어진 숫자 중 3개의 수를 더해서 소수가 되는 경우의 갯수를 구하기

function solution(num) {
	for (var a = 0; a < num.length - 2; a++) {
		for (var b = a + 1; b < num.length - 1; b++) {
			for (var c = b + 1; c < num.length; c++) {
				var sum = num[a] + num[b] + num[c];
			}
		}
	}
	console.log(sum);
}
solution([1, 2, 3, 4]); // return 1
// solution([15, 23, 46, 37, 27]); // return 4
