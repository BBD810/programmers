// function solution(array, commands) {
// 	var answer = [];
// 	var cut1 = array.slice(commands[0][0] - 1, commands[0][1]); // ==> [5,2,6,3]
// 	var cut2 = array.slice(commands[1][0] - 1, commands[1][1]); // ==> [6]
// 	var cut3 = array.slice(commands[2][0] - 1, commands[2][1]); //==> [1,5,2,6,3,7,4]
// 	// console.log(cut1, cut2, cut3);
// 	for (var i = 0; i < commands.length; i++) {
// 		var cut = array.slice(commands[i][0] - 1, commands[i][1]);

// 		// console.log(cut);
// 	}
// 	var sort = cut.sort();
// 	// console.log(sort);
// 	var choice1 = sort[commands[0][2] - 1];
// 	var choice2 = sort[commands[1][2] - 1];
// 	var choice3 = sort[commands[2][2] - 1];
// 	// console.log(choice1, choice2, choice3);
// 	answer.push(choice1, choice2, choice3);
// 	console.log(answer);
// }
// solution(
// 	[1, 5, 2, 6, 3, 7, 4],
// 	[
// 		[2, 5, 3],
// 		[4, 4, 1],
// 		[1, 7, 3],
// 	]
// );

function solution(array, commands) {
	var answer = [];
	for (var i = 0; i < commands.length; i++) {
		var cut = array.slice(commands[i][0] - 1, commands[i][1]);
		console.log('cut', cut);
		var sort = cut.sort(function (a, b) {
			if (a > b) return 1;
			if (a === b) return 0;
			if (a < b) return -1;
		});
		console.log('sort', sort);
		var choice = sort[commands[i][2] - 1];
		answer.push(choice);
		console.log('answer', answer);
	}
	console.log('answer', answer);
	return answer;
}
solution(
	[1, 5, 2, 6, 3, 7, 4],
	[
		[2, 5, 3],
		[4, 4, 1],
		[1, 7, 3],
	]
);
