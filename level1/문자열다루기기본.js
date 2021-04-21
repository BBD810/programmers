// 2021.04.21 해결

function solution(s) {
	var result = [];
	s = s.split('');
	if (s.length === 4 || s.length === 6) {
		for (var i = 0; i < s.length; i++) {
			if (isNaN(s[i]) === false) {
				result.push(false);
			}
		}
		if (result.length === s.length) {
			return true;
		}
	}
	return false;
}
solution('a234');
solution('adf');
