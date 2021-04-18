function solution(n, lost, reserve) {
	for (var i = 0; i < lost.length; i++) {
		if (reserve.includes(lost[i])) {
			let idx = reserve.indexOf(lost[i]);
			lost[i] = false;
			reserve[idx] = false;
		}
	}
	for (var j = 0; j < lost.length; j++) {
		if (!lost[j]) {
			continue;
		}
		if (reserve.includes(lost[j] + 1)) {
			let idx = reserve.indexOf(lost[j] + 1);
			lost[j] = false;
			reserve[idx] = false;
		} else if (reserve.includes(lost[j] - 1)) {
			let idx = reserve.indexOf(lost[j] - 1);
			lost[j] = false;
			reserve[idx] = false;
		}
	}

	for (var x = 0; x < lost.length; x++) {
		if (lost[x]) {
			n--;
		}
	}

	return n;
}
