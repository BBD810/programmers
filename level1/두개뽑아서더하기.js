function solution(numbers) {
	var answer = [];
	for (let i = 0; i < numbers.length; i++) {
		for (let j = i + 1; j < numbers.length; j++) {
			answer.push(numbers[i] + numbers[j]); //두 수를 뽑아서 더하기
			uniqueArr = [...new Set(answer)]; // 중복된 배열요소 제거하기
			let result = uniqueArr.sort(function (a, b) {
				return a - b; // 오름차순으로 정리하기
			});
		}
	}
	// console.log(numbers);
	console.log(uniqueArr);
	// return answer;
}
solution([2, 1, 3, 4, 1]);
solution([5, 0, 2, 7]);

// 1.중복값 찾아서 제거하고
// 2.오름차순으로 정렬하면 끝
