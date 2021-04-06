var c = [];
function solution(n) {
	var answer = 0;
	var a = n.toString(3); //1200
	var b = a.split(''); //['0','0','2','1']
	for (var i = 0; i < b.length; i++) {
		var c = b[i] * Math.pow(3, i);
		answer += c;
	}
	// console.log(a);
	// console.log(b);
	// console.log(c);
	console.log(answer);
}
solution(45);
solution(125);

// 숫자 제곱 만드는 방법
// let a = Math.pow(5, 2);
// console.log(a);

// 스트링 상태에서 순서를 뒤집는 방법
// const var1 = 'english123';
// console.log(var1.split('').reverse().join(''));
