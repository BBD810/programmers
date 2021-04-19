// 2021.04.19 해결
// strings와 정수 n이 주어졌을 때 각문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬

function solution(strings, n) {
	for (var i = 0; i < strings.length; i++) {
		strings[i] = strings[i].split('');
		strings[i].unshift(strings[i][n]);
	}
	strings.sort();
	for (var j = 0; j < strings.length; j++) {
		strings[j].shift();
		strings[j] = strings[j].join('');
	}
	return strings;
}
solution(['sun', 'bed', 'car'], 1);
