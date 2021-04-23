// 유클리드 호제법 ( GCD 구하기 )
//  a를 b로 나눈 나머지를 r이라고 했을 때
// GCD(a,b) = GCD(b,r)
// 이때 r이 0이라면 그때의 b가 최대공약수

function solution(n, m) {
	var big;
	var small;
	if (n >= m) {
		n = big;
		m = small;
	} else {
		n = small;
		m = big;
	}
	function getGCD(small, big) {
		var r;
		while (r !== 0) {
			r = big % small; //r=8
			big = small; //
			if (r !== 0) {
				small = r;
			}
		}
		var GCD = small;
		console.log(GCD);
	}
	getGCD(small, big);
}
solution(15, 16);
