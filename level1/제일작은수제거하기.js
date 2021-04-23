// 2021.04.23 해결

function solution(arr) {
	var arr2 = arr.slice(0, arr.length);
	arr2.sort(function (a, b) {
		return a - b;
	});
	var del = arr2.shift();
	for (var i = 0; i < arr.length + 1; i++) {
		if (arr[i] === del) {
			arr.splice(i, 1);
		}
	}
	if (arr.length === 0) {
		return [-1];
	}
	console.log('del', del, 'arr', arr, 'arr2', arr2);
}
solution([4, 3, 2, 1]);
