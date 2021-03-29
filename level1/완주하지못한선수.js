// // process 1. 시간 초과로 탈락
function solution(participant, completion) {
	var result = [];
	for (var i = 0; i < participant.length; i++) {
		for (var j = 0; j < participant.length; j++) {
			if (participant[i] === completion[j]) {
				participant[i] = false;
				completion[j] = false;
				break;
			}
		}
	}
	for (var k = 0; k < participant.length; k++) {
		if (participant[k] !== false) {
			console.log(participant[k]);
			return participant[k];
		}
	}
}

// solution(
// 	['marina', 'josipa', 'nikola', 'vinko', 'filipa'],
// 	['josipa', 'filipa', 'marina', 'nikola']
// );
solution(['kiki', 'leo', 'eden'], ['eden', 'kiki']);
solution(
	['marina', 'josipa', 'nikola', 'vinko', 'filipa'],
	['josipa', 'filipa', 'marina', 'nikola']
);

// //process 2 합격
function solution(participant, completion) {
	participant.sort();
	completion.sort();
	for (var i = 0; i < participant.length; i++) {
		if (participant[i] !== completion[i]) {
			console.log(participant[i]);
		}
	}
}

solution(['kiki', 'leo', 'eden'], ['eden', 'kiki']);
solution(
	['marina', 'josipa', 'nikola', 'vinko', 'filipa'],
	['josipa', 'filipa', 'marina', 'nikola']
);
