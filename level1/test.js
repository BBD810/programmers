function solution(strings, n) {
	var result = [];
	for (var i = 0; i < strings.length; i++) {
		var arr = strings[i].split('');
		// console.log(arr);
		result.push(arr.splice(0, 1));
		console.log('arr:', arr, 'result:', result);
	}
}
solution(['sun', 'bed', 'car'], 1);

// 1. 정렬하기
// 2. strings의 각 요소들을 splice ( 0, n)으로 자르기
// 3. 자른것들을 다른곳에 모아둠
// 4. 잘려나간 요소들을 정렬
// 5. 원래 모양대로 합쳐줌
